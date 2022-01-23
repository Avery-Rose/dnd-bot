import { Schema, model, Document } from "mongoose";
import { Snowflake } from "discord.js";

export interface ISettings extends Document {
  id: Snowflake;
}

const SettingsSchema = new Schema({
  id: { type: String, requried: true, index: true, unique: true },
});

export default model<ISettings>("settings", SettingsSchema);
