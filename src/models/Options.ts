import { Schema, model, Document, ObjectId } from "mongoose";
import { Snowflake } from "discord.js";

export interface IOptions extends Document {
  guildId: Snowflake;
  worlds: ObjectId[];
}

const OptionsSchema = new Schema({
  guildId: { type: String, required: true, unique: true },
  worlds: { type: Array, of: Schema.Types.ObjectId, required: true },
});

export default model<IOptions>("options", OptionsSchema);
