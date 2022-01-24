import dotenv from "dotenv";
dotenv.config();
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import logger from "../../util/logger";
const clientId = process.env["DISCORD_CLIENT_ID"],
  token = process.env["DISCORD_TOKEN"];

console.log(clientId, token);

if (!clientId || !token) {
  throw new Error("Missing environment variables");
}
logger.error(`Not Deploying Global Commands for development purposes.`);
// ! not ready
/*
logger.info(`Registering commands globaly on client ${clientId}`);

const commands = [].map((command) => command.toJSON());

commands.forEach((command) => {
  logger.info(`Registering command: ${command.name}`);
});

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => logger.info("Successfully registered application commands."))
  .catch(logger.error);
*/
