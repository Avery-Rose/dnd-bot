import { ButtonInteraction, Client, SelectMenuInteractionEvent, SelectMenuInteraction } from "discord.js";
import characterSelection from "../../components/characterSelection";
import logger from "../../util/logger";

const interaction: SelectMenuInteractionEvent = {
  execute: (client: Client, interaction: SelectMenuInteraction) => {
    logger.debug("interaction ran");
    return interaction.update({
      content: `You Selected ${interaction.values[0]}`,
      components: [characterSelection],
    });
  },
  validator: (interaction: SelectMenuInteraction) => {
    return interaction.customId.toLowerCase() === "characterselection";
  },
};

export default interaction;
