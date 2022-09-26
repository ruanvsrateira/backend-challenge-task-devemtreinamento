import { Request, Response, NextFunction } from "express";
import { TaskRepository } from "../repositories/taskRepository";

export const ExistTaskMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const task = await TaskRepository.findTaskById(Number(id));

  if (!task) {
    return res.status(404).send({ error: "task not founded on this id" });
  } else {
    return next();
  }
};
