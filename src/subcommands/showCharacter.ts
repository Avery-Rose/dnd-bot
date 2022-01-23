import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction, Subcommand } from "discord.js";

import characterInfoEmbed from "../embeds/characterInfo";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand() || !interaction.guild) return;

  const guildId = interaction.guild.id;

  // TODO: get the world from the database

  // const world = await getWorld(guildId);

  const id = interaction.user.id;

  // TODO: get character from the database using the world and id

  // const character = await getCharacter(world, id);

  await interaction.reply({
    content: "Here is your character info!",
    embeds: [characterInfoEmbed(interaction.user)],
    ephemeral: true,
  });
}

const SelectCharacterCommand: Subcommand = {
  parent: "character",
  data: new SlashCommandBuilder().setName("info").setDescription("Replies with your character info."),
  execute,
};

export default SelectCharacterCommand;
