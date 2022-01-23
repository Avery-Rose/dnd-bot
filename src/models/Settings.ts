import { Schema, model, Document } from "mongoose";
import { Snowflake } from "discord.js";

interface ICharacter {
  id: string;
  ownerId: string;
  avatarURL: string;
  name: string;
  stats: {
    health: number;
    intelligence: number;
    speed: number;
    strength: number;
  };
}

interface IWorld {
  id: string;
  characters: ICharacter[];
}

export interface ISettings extends Document {
  id: Snowflake;
  worlds: IWorld[];
}

const SettingsSchema = new Schema({
  id: { type: String, requried: true, index: true, unique: true },
  worlds: { type: [] },
});

export default model<ISettings>("settings", SettingsSchema);
