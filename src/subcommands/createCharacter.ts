import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, Client, Subcommand } from "discord.js";

async function execute(client: Client, interaction: CommandInteraction) {
  if (!interaction.isCommand()) return;

  await interaction.reply({
    content: `Creating Character With name ${interaction.options.getString("name")}`,
    ephemeral: true,
  });
}

const CreateCharacterCommand: Subcommand = {
  parent: "character",
  data: new SlashCommandBuilder().setName("create").setDescription("Create a character"),
  execute,
};

export default CreateCharacterCommand;
