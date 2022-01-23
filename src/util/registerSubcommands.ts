import fs from "fs/promises";
import path from "path";
import { Client, Subcommand } from "discord.js";
import logger from "../util/logger";

export default async function registerSubcommands(client: Client, subcommandsDir: string) {
  logger.info("Registering subcommands");

  const subcommandFiles = await fs.readdir(subcommandsDir);

  for (const file of subcommandFiles) {
    if (!file.endsWith(".js")) continue;

    const filePath = path.join(subcommandsDir, file);
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) continue;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const subcommand: Subcommand = require(filePath)?.default;
    logger.info(`Registering subcommand: ${subcommand.data.name}`);
    // Set a new item in the Collection
    client.subcommands.set(subcommand.data.name, subcommand);
  }
}
