import { prismaClient } from "../../prisma/prismaClient";
import { Task } from "../entities/Task";

class taskRepository {
  async getAllTasks(): Promise<Task[]> {
    return await prismaClient.task.findMany({});
  }

  async createNewTask(data: Task): Promise<Task> {
    return await prismaClient.task.create({ data });
  }

  async deleteTask(id: number): Promise<Task> {
    return await prismaClient.task.delete({
      where: { id },
    });
  }

  async editTask(id: number, data: Task): Promise<Task> {
    return await prismaClient.task.update({
      where: { id },
      data,
    });
  }

  async findTaskById(id: number): Promise<Task | null> {
    return await prismaClient.task.findUnique({ where: { id } });
  }
}

export const TaskRepository = new taskRepository();
