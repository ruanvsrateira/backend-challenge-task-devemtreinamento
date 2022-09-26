import { Router } from "express";
import { TaskController } from "./controllers/taskController";
import { ExistTaskMiddleware } from "./middlewares/existTaskMiddleware";

const routes = Router();

routes.get("/tasks", TaskController.get);
routes.post("/task", TaskController.create);
routes.delete("/task/:id/delete", ExistTaskMiddleware, TaskController.delete);
routes.put("/task/:id/edit", ExistTaskMiddleware, TaskController.edit);
routes.get("/task/:id", ExistTaskMiddleware, TaskController.findById);

export { routes };
