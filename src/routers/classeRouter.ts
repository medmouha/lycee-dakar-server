import { Router } from "express";
import { ClasseController } from "../controllers/classeController";

export class ClasseRoutes {
  private classeController: ClasseController;
  public router: Router;

  constructor() {
    this.classeController = new ClasseController();
    this.router = Router();
    this.configRoute();
  }

  private configRoute() {
    this.router.post(
      "/",
      this.classeController.create.bind(this.classeController)
    );
    this.router.get(
      "/",
      this.classeController.getAll.bind(this.classeController)
    );
    this.router.get(
      "/:id",
      this.classeController.getById.bind(this.classeController)
    );
    this.router.put(
      "/:id",
      this.classeController.update.bind(this.classeController)
    );
    this.router.delete(
      "/:id",
      this.classeController.delete.bind(this.classeController)
    );
  }
}
