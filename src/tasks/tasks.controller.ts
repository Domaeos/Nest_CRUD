import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Task } from 'src/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(
    @Body() createTaskDto: { title: string; description: string },
  ): Task {
    return this.tasksService.createTask(
      createTaskDto.title,
      createTaskDto.description,
    );
  }

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Task {
    return this.tasksService.getTaskById(id);
  }

  @Put(':id/status')
  updateTaskStatus(
    @Param('id') id: number,
    @Body('status') status: 'OPEN' | 'DONE',
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): void {
    this.tasksService.deleteTask(id);
  }
}
