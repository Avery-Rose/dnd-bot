import { ButtonInteraction } from "discord.js";

export default function (interaction: ButtonInteraction) {
  return interaction.reply({
    content: "Hello!",
    ephemeral: true,
  });
}
