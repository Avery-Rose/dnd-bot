import dotenv from "dotenv";
dotenv.config();

import path from "path";
import { Client, Collection } from "discord.js";
import { connect } from "mongoose";
import logger from "./util/logger";
import registerEvents from "./util/registerEvents";
import registerCommands from "./util/registerCommands";
import registerInteractions from "./util/registerInteractions";
import registerSubcommands from "./util/registerSubcommands";

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.commands = new Collection();
client.interactions = new Collection();
client.subcommands = new Collection();

const setup = async () => {
  await connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  ).then(() => {
    logger.info(`Connected to MongoDB`);
  });
  logger.divide();
  await registerEvents(client, path.join(__dirname, "events"));
  logger.divide();
  await registerCommands(client, path.join(__dirname, "commands"));
  logger.divide();
  await registerSubcommands(client, path.join(__dirname, "subcommands"));
  logger.divide();
  await registerInteractions(client, path.join(__dirname, "interactions"));
  logger.divide();
  await client.login(process.env.DISCORD_TOKEN);
};

setup();

process.on("uncaughtException", logger.error);
process.on("unhandledRejection", logger.error);
