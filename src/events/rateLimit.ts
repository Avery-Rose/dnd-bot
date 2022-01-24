import { Client, Event, RateLimitData } from "discord.js";
import logger from "../util/logger";

async function rateLimit(client: Client, rateLimitData: RateLimitData) {
  const data = rateLimitData;
  logger.divide();
  logger.discord.warn(`Rate limit info:`);
  logger.divide();
  logger.discord.warn(`Timeout: ${data.timeout / 1000}s`);
  logger.discord.warn(`Limit: ${data.limit}`);
  logger.discord.warn(`Method: ${data.method}`);
  logger.discord.warn(`Path: ${data.path}`);
  logger.discord.warn(`Route: ${data.route}`);
  logger.discord.warn(`Global: ${data.global}`);
  logger.divide();
}

const RateLimitEvent: Event = {
  name: "rateLimit",
  run: rateLimit,
};

export default RateLimitEvent;
