import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "discord.js";
import executeSubcommand from "../util/executeSubcommand";

const WorldCommand: Command = {
  data: new SlashCommandBuilder().setName("world").setDescription("world parent command"),
  execute: executeSubcommand,
};

export default WorldCommand;
