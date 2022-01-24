import { Guild, MessageActionRow, MessageSelectMenu } from "discord.js";
import logger from "../util/logger";

import World from "../models/World";
import Options from "../models/Options";

const worldSelection = async (guild: Guild): Promise<MessageActionRow> => {
  const guildDocument = await Options.findOne({ guildId: guild.id });
  //logger.debug(guildDocument);
  const worlds = await World.find({ guildId: guild.id });
  //logger.debug(worlds);

  const options = [];

  for (const world of worlds) {
    options.push({
      label: world.name,
      description: world.description,
      value: world.name,
    });
  }

  return new MessageActionRow().addComponents(
    new MessageSelectMenu().setCustomId("worldSelection").setPlaceholder("Nothing selected").addOptions(options)
  );
};

export default worldSelection;
