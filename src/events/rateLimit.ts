import { Client, Event, RateLimitData } from "discord.js";
import logger from "../util/logger";

async function rateLimit(client: Client, rateLimitData: RateLimitData) {
  const data = rateLimitData;
  logger.divide();
  logger.info(`Rate limit info:`);
  logger.divide();
  logger.warn(`Timeout: ${data.timeout / 1000}s`);
  logger.warn(`Limit: ${data.limit}`);
  logger.warn(`Method: ${data.method}`);
  logger.warn(`Path: ${data.path}`);
  logger.warn(`Route: ${data.route}`);
  logger.warn(`Global: ${data.global}`);
  logger.divide();
}

const RateLimitEvent: Event = {
  name: "rateLimit",
  run: rateLimit,
};

export default RateLimitEvent;
