import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/taskRepository";

export const CreateNewTaskService = async (task: Task): Promise<Task> => {
  const taskCreated = await TaskRepository.createNewTask(task);

  return taskCreated;
};
