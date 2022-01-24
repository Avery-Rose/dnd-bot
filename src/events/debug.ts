import dotenv from "dotenv";
import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function debug(client: Client, info: string) {
  if (process.env["LOGGER_DEBUG"].toLowerCase() !== "true") return;

  logger.debug(`DISCORD API: ${info}`);
}

const DebugEvent: Event = {
  name: "debug",
  run: debug,
};

export default DebugEvent;
