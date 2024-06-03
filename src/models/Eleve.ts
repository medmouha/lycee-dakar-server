import mongoose, { Schema, Document, Types } from "mongoose";

export interface Eleve extends Document {
  fullName: string;
  adresse: string;
  dateNaissance: Date;
  classe_id: Types.ObjectId;
  createdAt: Date;
  updateAt: Date
}

export const EleveSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  adresse: { type: String, required: true},
  dateNaissance: { type: String, required: true },
  classe_id: { type: Schema.Types.ObjectId, ref: "Classe", required: true },
  createdAt: { type: Date, required: true, default: Date.now},
  updateddAt: { type: Date, required: true, default: Date.now},
});

const EleveModel = mongoose.model<Eleve>("Eleve", EleveSchema);

export default EleveModel;
