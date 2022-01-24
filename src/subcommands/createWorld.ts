import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, Client, Subcommand } from "discord.js";
import logger from "../util/logger";
import World from "../models/World";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand() || !interaction.guild) return;

  const worlds = await World.find({ guildId: interaction.guild.id });

  logger.debug(worlds.length, "worlds found");

  const worldName = interaction.options.getString("name");
  const worldDescription = interaction.options.getString("description");
  const user = interaction.user;

  // create a world
  const world = new World({
    name: worldName,
    description: worldDescription,
    createdAt: new Date(),
    characters: [],
  });

  await world.save();

  World.find({ ownerId: user.id }).then(logger.debug);

  await interaction.reply({
    content: `Created World With name ${interaction.options.getString("name")}`,
    ephemeral: true,
  });
}

const CreateCharacterCommand: Subcommand = {
  parent: "world",
  data: new SlashCommandBuilder().setName("create").setDescription("Create a world"),
  execute,
};

export default CreateCharacterCommand;
