import { Client, Event } from "discord.js";
import logger from "../util/logger";

async function error(client: Client, error: Error) {
  logger.error(error);
}

const ErrorEvent: Event = {
  name: "error",
  run: error,
};

export default ErrorEvent;
