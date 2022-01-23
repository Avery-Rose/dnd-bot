import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction, Subcommand } from "discord.js";

import characterSelect from "../components/characterSelection";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand()) return;

  await interaction.reply({
    content: "Select Your Character",
    ephemeral: true,
    components: [characterSelect],
  });
}

const SelectCharacterCommand: Subcommand = {
  parent: "character",
  data: new SlashCommandBuilder().setName("select").setDescription("Select a character"),
  execute,
};

export default SelectCharacterCommand;
