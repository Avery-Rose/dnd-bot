import { Client, CommandInteraction } from "discord.js";
import logger from "./logger";

export default async function executeSubcommand(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand()) return;

  const subcommandName = interaction.options.getSubcommand(false);
  if (!subcommandName) {
    interaction.reply({ content: "No subcommand specified!" });
    return;
  }

  const subcommand = client.subcommands.get(`${interaction.commandName.toLowerCase()}-${subcommandName.toLowerCase()}`);
  logger.debug(subcommand);
  if (!subcommand) {
    interaction.reply({
      content: `Failed to find sub command: \`\`${subcommandName}\`\``,
      ephemeral: true,
    });
    return;
  }
  subcommand.execute(client, interaction);
}
