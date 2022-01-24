import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, Client, Subcommand } from "discord.js";
import logger from "../util/logger";
import Character from "../models/Character";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand()) return;

  const characters = await Character.find({ ownerId: interaction.user.id });

  logger.debug(characters.length, "characters found");

  const characterName = interaction.options.getString("name");
  const user = interaction.user;

  // create a character
  const character = new Character({
    ownerId: user.id,
    avatarUrl: user.avatarURL(),
    name: characterName,
    points: 20,
    stats: {
      health: 0,
      intelligence: 0,
      speed: 0,
      strength: 0,
    },
    createdAt: new Date(),
  });

  await character.save();

  Character.find({ ownerId: user.id }).then(logger.debug);

  await interaction.reply({
    content: `Created Character With name ${interaction.options.getString("name")}`,
    ephemeral: true,
  });
}

const CreateCharacterCommand: Subcommand = {
  parent: "character",
  data: new SlashCommandBuilder().setName("create").setDescription("Create a character"),
  execute,
};

export default CreateCharacterCommand;
