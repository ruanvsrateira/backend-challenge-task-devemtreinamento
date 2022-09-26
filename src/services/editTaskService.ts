import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/taskRepository";

export const EditTaskService = async (
  id: number,
  task: Task
): Promise<Task> => {
  const taskEdited = await TaskRepository.editTask(id, task);

  return taskEdited;
};
