import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDto, UpdateTodoDto, TodoResponseDto } from './dtos/todo.dto';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTodos(): TodoResponseDto[] {
    return this.appService.getAllTodos();
  }

  @Get('completed')
  getAllCompletedTodos(): TodoResponseDto[] {
    return this.appService.getAllCompletedTodos();
  }

  @Get('incomplete')
  getAllIncompleteTodos(): TodoResponseDto[] {
    return this.appService.getAllIncompleteTodos();
  }

  @Get(':id')
  getSingleTodo(@Param('id') id: string): TodoResponseDto {
    return this.appService.getSingleTodo(id);
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto): TodoResponseDto {
    return this.appService.createTodo(body);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() body: UpdateTodoDto,
  ): TodoResponseDto {
    return this.appService.updateTodo(id, body);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): void {
    return this.appService.deleteTodo(id);
  }
}
