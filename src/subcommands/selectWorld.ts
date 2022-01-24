import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction, Subcommand } from "discord.js";

import worldSelect from "../components/worldSelection";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand() || !interaction.guild) return;

  await interaction.reply({
    content: "Select The World",
    ephemeral: true,
    components: [await worldSelect(interaction.guild)],
  });
}

const SelectCharacterCommand: Subcommand = {
  parent: "world",
  data: new SlashCommandBuilder().setName("select").setDescription("Select a character"),
  execute,
};

export default SelectCharacterCommand;
