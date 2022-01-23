import fs from "fs/promises";
import path from "path";
import { Client, Event } from "discord.js";
import logger from "../util/logger";

export default async function registerEvents(client: Client, eventsDir: string) {
  logger.info("Registering events");

  const eventFiles = await fs.readdir(eventsDir);

  for (const file of eventFiles) {
    if (!file.endsWith(".js")) continue; // since this runs at runtime, the files will be built and in javascript

    const filePath = path.join(eventsDir, file);
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) continue;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const event: Event = require(filePath)?.default;
    logger.info(`Registering event: ${event.name}`);

    // bind event to EventEmitter
    client.on(event.name, event.run.bind(null, client));
  }
}
