import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function debug(client: Client, info: string) {
  if (process.env.DEBUG) {
    logger.debug(`DISCORD DEBUG: ${info}`);
  }
}

const DebugEvent: Event = {
  name: "debug",
  run: debug,
};

export default DebugEvent;
