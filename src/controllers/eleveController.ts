import { Request, Response } from 'express';
import { EleveService } from '../services/eleveService';
import { Types } from 'mongoose';

export class EleveController {
  private eleveService: EleveService;

  constructor() {
    this.eleveService = new EleveService();
  }

  async create(req: Request, res: Response) {
    const { fullName, adresse, dateNaissance, classe_id } = req.body;
    if (fullName === undefined ||
        adresse === undefined ||
        dateNaissance === undefined ||
        classe_id === undefined
    ){
      res.status(400).json({ message: "Veuiller remplir tous les champs" });
    } else {
      try {
        const eleveData = { fullName, adresse, dateNaissance, classe_id };
        const data = await this.eleveService.create(eleveData);
        res.status(201).json(data);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const data = await this.eleveService.getAll();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const eleveId = new Types.ObjectId(req.params.id);
      const eleve = await this.eleveService.getById(eleveId);
      if (eleve) {
        res.json(eleve);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const eleveId = new Types.ObjectId(req.params.id);
      const eleveData = req.body;
      const updatedEleve = await this.eleveService.update(eleveId, eleveData);
      if (updatedEleve) {
        res.json(updatedEleve);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const eleveId = new Types.ObjectId(req.params.id);
      const deletedEleve = await this.eleveService.delete(eleveId);
      if (deletedEleve) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
