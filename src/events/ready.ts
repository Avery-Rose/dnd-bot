import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function ready(client: Client) {
  logger.info(`Discord Client Ready!`);
}

const ReadyEvent: Event = {
  name: "ready",
  run: ready,
};

export default ReadyEvent;
