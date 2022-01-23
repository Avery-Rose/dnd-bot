import { Client, Event, Interaction } from "discord.js";
import logger from "../util/logger";

async function interactionCreate(client: Client, interaction: Interaction) {
  if (!interaction) return;
  const memberTag = `${interaction.member?.user.username}#${interaction.member?.user.discriminator}`;
  if (interaction.isButton()) {
    const button = client.interactions.get(interaction.customId.toLowerCase());
    if (!button) return;
    button(interaction);
    logger.debug(`Button ${interaction.customId} executed by ${memberTag}`);
  } else if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    command.execute(client, interaction);
    //logger.debug(`Command `, interaction);
    const subcommand = interaction.options.getSubcommand(false);
    logger.debug(`Command: ${interaction.commandName}${subcommand ? `/${subcommand}` : ""} executed by ${memberTag}`);
  } else if (interaction.isSelectMenu()) {
    const selectMenu = client.interactions.get(interaction.customId.toLowerCase());
    if (!selectMenu) return;

    selectMenu(interaction);
    logger.debug(`Select Menu: ${interaction.customId} executed by ${memberTag}`, interaction.values);
  } else {
    logger.debug(`Unknown interaction: ${interaction.type} executed by ${memberTag}`);
  }
}

const InteractionCreateEvent: Event = {
  name: "interactionCreate",
  run: interactionCreate,
};

export default InteractionCreateEvent;
