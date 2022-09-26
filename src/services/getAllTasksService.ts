import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/taskRepository";

export const GetAllTasksService = async (): Promise<Task[]> => {
  const tasks = await TaskRepository.getAllTasks();

  return tasks;
};
