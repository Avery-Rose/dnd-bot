import { ButtonInteraction, Client, Interaction, ButtonInteractionEvent, SelectMenuInteraction } from "discord.js";

const interaction: ButtonInteractionEvent = {
  execute: (client: Client, interaction: ButtonInteraction) => {
    return interaction.reply({
      content: "Hello!",
      ephemeral: true,
    });
  },
  validator: (interaction: ButtonInteraction) => {
    return interaction.customId.toLowerCase() === "sendmessage";
  },
};

export default interaction;
