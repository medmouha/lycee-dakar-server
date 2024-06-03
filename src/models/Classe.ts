import mongoose, { Schema } from "mongoose";

export interface Classe extends Document{
    libelle: string;
    effectif: number;
}

export const ClasseSchema = new Schema ({
    libelle: { type: String, required: true},
    effectif: { type: Number, required: false}
});

const ClasseModel = mongoose.model<Classe>("Classe", ClasseSchema);

export default ClasseModel;