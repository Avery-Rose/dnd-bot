import fs from "fs/promises";
import path from "path";

import { Client, Interaction } from "discord.js";
import logger from "../util/logger";

export default async function registerInteractions(client: Client, interactionsDir: string) {
  logger.info("Registering interactions");

  const interactionFolders = await fs.readdir(interactionsDir);

  for (const folder of interactionFolders) {
    const interactionFiles = await fs.readdir(path.join(interactionsDir, folder));

    for (const file of interactionFiles) {
      if (!file.endsWith(".js")) continue; // since this runs at runtime, the files will be built and in javascript

      const fileName = file.replace(".js", "");
      const filePath = path.join(interactionsDir, folder, file);
      const stats = await fs.stat(filePath);
      if (!stats.isFile()) continue;

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const interaction: (interaction: Interaction) => void = require(filePath)?.default;
      logger.info(`Registering interaction: ${fileName}`);

      client.interactions.set(fileName.toLowerCase(), interaction);
    }
  }
}
