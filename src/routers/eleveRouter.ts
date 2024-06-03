import { Router } from "express";
import { EleveController } from "../controllers/eleveController";

export class EleveRoutes {
  private eleveController: EleveController;
  public router: Router;

  constructor() {
    this.eleveController = new EleveController();
    this.router = Router();
    this.configRoute();
  }

  private configRoute() {
    this.router.post(
      "/",
      this.eleveController.create.bind(this.eleveController)
    );
    this.router.get(
      "/",
      this.eleveController.getAll.bind(this.eleveController)
    );
    this.router.get(
      "/:id",
      this.eleveController.getById.bind(this.eleveController)
    );
    this.router.put(
      "/:id",
      this.eleveController.update.bind(this.eleveController)
    );
    this.router.delete(
      "/:id",
      this.eleveController.delete.bind(this.eleveController)
    );
  }
}
