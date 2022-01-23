import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function ready(client: Client) {
  logger.info(`Logged in as ${client.user?.tag}!`);
}

const ReadyEvent: Event = {
  name: "ready",
  run: ready,
};

export default ReadyEvent;
