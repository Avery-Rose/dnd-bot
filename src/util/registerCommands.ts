import fs from "fs/promises";
import path from "path";
import { Client, Command } from "discord.js";
import logger from "../util/logger";

export default async function registerCommands(client: Client, commandsDir: string) {
  logger.info("Registering commands");

  const commandFiles = await fs.readdir(commandsDir);

  for (const file of commandFiles) {
    if (!file.endsWith(".js")) continue;

    const filePath = path.join(commandsDir, file);
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) continue;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const command: Command = require(filePath)?.default;
    logger.info(`Registering command: ${command.data.name}`);
    // Set a new item in the Collection
    client.commands.set(command.data.name, command);
  }
}
