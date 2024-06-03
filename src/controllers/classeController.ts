import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ClasseService } from '../services/classeService';

export class ClasseController {
  private classeService: ClasseService;

  constructor() {
    this.classeService = new ClasseService();
  }

  async create(req: Request, res: Response) {
    const { libelle } = req.body;
    if (libelle === undefined
    ) {
      res.status(400).json({ message: "Veuiller remplir tous les champs" });
    } else {
      try {
        const classeData = { libelle, effectif: 0 };
        const data = await this.classeService.create(classeData);
        res.status(201).json(data);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const data = await this.classeService.getAll();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const classeId = new Types.ObjectId(req.params.id);
      const classe = await this.classeService.getById(classeId);
      if (classe) {
        res.json(classe);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const classeId = new Types.ObjectId(req.params.id);
      const classeData = req.body;
      const updatedClasse = await this.classeService.update(classeId, classeData);
      if (updatedClasse) {
        res.json(updatedClasse);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const classeId = new Types.ObjectId(req.params.id);
      const deletedClasse = await this.classeService.delete(classeId);
      if (deletedClasse) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
