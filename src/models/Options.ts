import { Schema, model, Document, ObjectId } from "mongoose";
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
  characters: ObjectId[];
}

export interface IOptions extends Document {
  id: Snowflake;
  worlds: ObjectId[];
}

const SettingsSchema = new Schema({
  id: { type: String, requried: true, index: true, unique: true },
  worlds: { type: [] },
});

export default model<IOptions>("options", SettingsSchema);
