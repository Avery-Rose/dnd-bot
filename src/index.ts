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

// MODELS
import Options from "./models/Options";
import World from "./models/World";
import Character from "./models/Character";
import User from "./models/User";

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.commands = new Collection();
client.interactions = new Collection();
client.subcommands = new Collection();

const setup = async () => {
  logger.divide();
  await registerEvents(client, path.join(__dirname, "events"));
  logger.divide();
  await registerCommands(client, path.join(__dirname, "commands"));
  logger.divide();
  await registerSubcommands(client, path.join(__dirname, "subcommands"));
  logger.divide();
  await registerInteractions(client, path.join(__dirname, "interactions"));
  logger.divide();
  await connect(process.env.MONGO_URI).then(() => {
    logger.info(`Connected to MongoDB`);
    //Options.find().then(logger.debug);
    //World.find().then(logger.debug);
    //Character.find().then(logger.debug);
    //User.find().then(logger.debug);
  });
  await client.login(process.env.DISCORD_TOKEN);
};

setup();

process.on("uncaughtException", logger.error);
process.on("unhandledRejection", logger.error);
