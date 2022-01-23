import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "discord.js";
import executeSubcommand from "../util/executeSubcommand";

const CharacterCommand: Command = {
  data: new SlashCommandBuilder().setName("character").setDescription("character parent command"),
  execute: executeSubcommand,
};

export default CharacterCommand;
