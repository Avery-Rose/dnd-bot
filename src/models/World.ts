import { Schema, model, Document, ObjectId } from "mongoose";

export interface IWorld extends Document {
  name: string;
  description: string;
  createdAt: Date;
  characters: ObjectId[];
}

const WorldSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true },
  characters: { type: Array, of: Schema.Types.ObjectId, required: true },
});

export default model<IWorld>("worlds", WorldSchema);
