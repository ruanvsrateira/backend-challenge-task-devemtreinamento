import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/taskRepository";

export const FindTaskByIdService = async (id: number): Promise<Task | null> => {
  const task = await TaskRepository.findTaskById(id);

  return task;
};
