import { Task } from "../entities/Task";
import { Request, Response } from "express";
import { CreateNewTaskService } from "../services/createNewTaskService";
import { GetAllTasksService } from "../services/getAllTasksService";
import { DeleteTaskService } from "../services/deleteTaskService";
import { EditTaskService } from "../services/editTaskService";
import { FindTaskByIdService } from "../services/findTaskByIdService";

class taskController {
  constructor() {}

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await GetAllTasksService();

      return res.status(200).send({ tasks });
    } catch (err) {
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { title, status } = req.body;

    try {
      const task = new Task({ title, status });
      const taskCreated = await CreateNewTaskService(task);

      return res.status(200).send({ taskCreated });
    } catch (err) {
      console.log("dados enviados =>", title, status);
      console.log(err);
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const taskDeleted = await DeleteTaskService(Number(id));

      return res.status(200).send({ taskDeleted });
    } catch (err) {
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, status } = req.body;

    try {
      const task = new Task({ title, status });
      const taskEdited = await EditTaskService(Number(id), task);

      return res.status(200).send({ taskEdited });
    } catch (err) {
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const task = await FindTaskByIdService(Number(id));

      return res.status(200).send({ task });
    } catch (err) {
      return res.status(500).send({ error: "unknown error" });
    }
  }
}

export const TaskController = new taskController();
