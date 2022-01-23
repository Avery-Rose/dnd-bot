// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Client, Collection } from "discord.js";

declare module "discord.js" {
  export interface Client {
    commands: Collection<string, Command>;
    subcommands: Collection<string, Subcommand>;
    interactions: Collection<string, (interaction: Interaction) => void>;
  }

  export interface Command {
    data: SlashCommandBuilder;
    execute(client: Client, interaction: Interaction): Promise<void>;
  }

  export interface Subcommand {
    parent: string;
    data: SlashCommandBuilder;
    execute(client: Client, interaction: Interaction): Promise<void>;
  }

  export interface Event {
    name: string;
    run(client: Client, ...args: any[]): Promise<void>;
  }
}
