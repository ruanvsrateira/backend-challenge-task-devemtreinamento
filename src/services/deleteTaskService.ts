import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/taskRepository";

export const DeleteTaskService = async (id: number): Promise<Task> => {
  const taskDeleted = await TaskRepository.deleteTask(id);

  return taskDeleted;
};
