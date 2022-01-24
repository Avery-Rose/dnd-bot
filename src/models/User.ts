import { Schema, model, Document, ObjectId } from "mongoose";
import { Snowflake } from "discord.js";

export interface IUser extends Document {
  ownerId: Snowflake;
  selectedCharacter: ObjectId[];
}

const UserSchema = new Schema({
  ownerId: { type: String, required: true },
  selectedCharacter: { type: Array, of: Schema.Types.ObjectId, required: true },
});

export default model<IUser>("characters", UserSchema);
