import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, Command, CommandInteraction } from "discord.js";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand()) return;

  await interaction.reply({
    content: `Test`,
    ephemeral: true,
  });
}

const TestCommand: Command = {
  data: new SlashCommandBuilder().setName("test").setDescription("Test command!"),
  execute,
};

export default TestCommand;
