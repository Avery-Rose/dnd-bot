import { Client, Event, Interaction } from "discord.js";
import logger from "../util/logger";

async function interactionCreate(client: Client, interaction: Interaction) {
  if (!interaction) return;
  const memberTag = interaction.user.tag;
  if (interaction.isButton() || interaction.isSelectMenu()) {
    const interactionEvent = client.interactions.find((i) => i.validator(interaction));
    if (interactionEvent) {
      logger.debug(`Interaction: ${interaction.type} executed by ${memberTag}`);
      interactionEvent.execute(client, interaction);
    }
  } else if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    //logger.debug(command);
    command.execute(client, interaction);
    logger.debug(`Command `, interaction.type);
    const subcommand = interaction.options.getSubcommand(false);
    logger.debug(`Command: ${interaction.commandName}${subcommand ? `/${subcommand}` : ""} executed by ${memberTag}`);
  }
}

const InteractionCreateEvent: Event = {
  name: "interactionCreate",
  run: interactionCreate,
};

export default InteractionCreateEvent;
