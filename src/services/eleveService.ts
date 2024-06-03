import { Types } from 'mongoose';
import EleveModel, { Eleve } from '../models/Eleve';
import ClasseModel, { Classe } from '../models/Classe';

export class EleveService {
  async create(eleveData: Partial<Eleve>): Promise<Eleve> {
    const eleve = new EleveModel(eleveData);
    const classe= await ClasseModel.findById(eleveData.classe_id).exec();
    if(classe !== null && !isNaN(classe.effectif)) {
        classe.effectif = classe.effectif + 1;
        await classe.save();
    }
        
    return eleve.save();
  }

  async getAll(): Promise<Eleve[]> {
    return EleveModel.find().exec();
  }

  async getById(id: Types.ObjectId): Promise<Eleve | null> {
    return EleveModel.findById(id).exec();
  }

  async update(id: Types.ObjectId, eleveData: Partial<Eleve>): Promise<Eleve | null> {
    return EleveModel.findByIdAndUpdate(id, eleveData, { new: true }).exec();
  }

  async delete(id: Types.ObjectId): Promise<Eleve | null> {
    return EleveModel.findByIdAndDelete(id).exec();
  }
}
