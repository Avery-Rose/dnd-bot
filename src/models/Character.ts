import { Schema, model, Document } from "mongoose";
import { Snowflake } from "discord.js";

export interface ICharacter extends Document {
  ownerId: Snowflake;
  avatarUrl: string;
  name: string;
  stats: {
    health: number;
    intelligence: number;
    speed: number;
    strength: number;
  };
}

const CharacterSchema = new Schema({
  ownerId: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  name: { type: String, required: true },
  stats: {
    health: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    speed: { type: Number, required: true },
    strength: { type: Number, required: true },
  },
});

export default model<ICharacter>("characters", CharacterSchema);
