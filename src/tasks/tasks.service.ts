import { Injectable } from '@nestjs/common';
import { Task } from 'src/task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(title: string, description: string): Task {
    const id = this.tasks.length + 1;
    const task: Task = {
      id,
      title,
      description,
      status: 'OPEN',
    };
    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((x) => x.id === id);
  }

  updateTaskStatus(id: number, status: 'OPEN' | 'DONE'): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.status = status;
    }
    return task;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((x) => x.id !== id);
  }
}
