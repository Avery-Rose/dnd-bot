import dotenv from "dotenv";
import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function warn(client: Client, info: string) {
  logger.discord.warn(info);
}

const WarnEvent: Event = {
  name: "warn",
  run: warn,
};

export default WarnEvent;
