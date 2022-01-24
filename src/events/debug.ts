import dotenv from "dotenv";
import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function debug(client: Client, info: string) {
  logger.discord.debug(info);
}

const DebugEvent: Event = {
  name: "debug",
  run: debug,
};

export default DebugEvent;
