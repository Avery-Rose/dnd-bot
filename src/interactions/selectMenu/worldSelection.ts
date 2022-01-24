import { ButtonInteraction, Client, SelectMenuInteractionEvent, SelectMenuInteraction } from "discord.js";
import worldSelection from "../../components/worldSelection";
import logger from "../../util/logger";

const interaction: SelectMenuInteractionEvent = {
  execute: async (client: Client, interaction: SelectMenuInteraction) => {
    if (!interaction.guild) return interaction.update("This meny can only be used in a guild.");
    return interaction.update({
      content: `You Selected ${interaction.values[0]}`,
      components: [await worldSelection(interaction.guild)],
    });
  },
  validator: (interaction: SelectMenuInteraction) => {
    return interaction.customId.toLowerCase() === "worldSelection";
  },
};

export default interaction;
