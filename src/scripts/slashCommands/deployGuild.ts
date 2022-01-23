import dotenv from "dotenv";
dotenv.config();
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import logger from "../../util/logger";
const clientId = process.env["CLIENT_ID"],
  guildId = process.env["GUILD_ID"],
  token = process.env["DISCORD_TOKEN"];

if (!clientId || !guildId || !token) {
  throw new Error("Missing environment variables");
}

logger.info(`Registering commands for guild ${guildId} on client ${clientId}`);

const commands = [
  new SlashCommandBuilder()
    .setName("character")
    .setDescription("Replies with character info!")
    .addSubcommand((subcommand) => subcommand.setName("info").setDescription("Replies with character info!"))
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a character!")
        .addStringOption((option) =>
          option.setName("name").setDescription("The name of the character").setRequired(true)
        )
    )
    .addSubcommand((subcommand) => subcommand.setName("delete").setDescription("Delete a character!"))
    .addSubcommand((subcommand) => subcommand.setName("edit").setDescription("Edit current character!"))
    .addSubcommand((subcommand) => subcommand.setName("select").setDescription("Select a character!")),
  new SlashCommandBuilder()
    .setName("world")
    .setDescription("Replies with world info!")
    .addSubcommand((subcommand) => subcommand.setName("info").setDescription("Replies with world info!"))
    .addSubcommand((subcommand) => subcommand.setName("create").setDescription("Create a world!"))
    .addSubcommand((subcommand) => subcommand.setName("delete").setDescription("Deletes a world!"))
    .addSubcommand((subcommand) => subcommand.setName("edit").setDescription("Edit current world!"))
    .addSubcommand((subcommand) => subcommand.setName("select").setDescription("Select a world!")),
  new SlashCommandBuilder().setName("test").setDescription("Test command!"),
].map((command) => command.toJSON());

commands.forEach((command) => {
  logger.info(`Registering command: ${command.name}`);
});

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => logger.info("Successfully registered application commands."))
  .catch(logger.error);
