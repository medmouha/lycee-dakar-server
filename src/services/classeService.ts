import { Types } from 'mongoose';
import ClasseModel, { Classe } from '../models/Classe';

export class ClasseService {
  async create(classeData: Partial<Classe>): Promise<Classe> {
    const classe = new ClasseModel(classeData);
    return classe.save();
  }

  async getAll(): Promise<Classe[]> {
    return ClasseModel.find().exec();
  }

  async getById(id: Types.ObjectId): Promise<Classe | null> {
    return ClasseModel.findById(id).exec();
  }

  async update(id: Types.ObjectId, classeData: Partial<Classe>): Promise<Classe | null> {
    return ClasseModel.findByIdAndUpdate(id, classeData, { new: true }).exec();
  }

  async delete(id: Types.ObjectId): Promise<Classe | null> {
    return ClasseModel.findByIdAndDelete(id).exec();
  }
}
