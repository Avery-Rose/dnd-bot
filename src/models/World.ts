import { Schema, model, Document, ObjectId } from "mongoose";

export interface IWorld extends Document {
  characters: ObjectId[];
}

const WorldSchema = new Schema({
  characters: { type: Array, of: Schema.Types.ObjectId, required: true },
});

export default model<IWorld>("worlds", WorldSchema);
