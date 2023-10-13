import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { data } from './data';
import { CreateTodoDto, UpdateTodoDto, TodoResponseDto } from './dtos/todo.dto';

@Injectable()
export class AppService {
  getAllTodos(): TodoResponseDto[] {
    return data.todo;
  }

  getAllCompletedTodos(): TodoResponseDto[] {
    return data.todo.filter((todo) => todo.completed);
  }

  getAllIncompleteTodos(): TodoResponseDto[] {
    return data.todo.filter((todo) => !todo.completed);
  }

  getSingleTodo(id: string): TodoResponseDto {
    const responseTodo = data.todo.find((todo) => todo.id === id);
    if (!responseTodo) {
      throw new NotFoundException('todo not found');
    }
    return responseTodo;
  }

  createTodo(todo: CreateTodoDto): TodoResponseDto {
    const newTodo = {
      id: uuid(),
      ...todo,
      createdAt: new Date(),
    };
    data.todo.push(newTodo);
    return newTodo;
  }

  updateTodo(id: string, todo: UpdateTodoDto): TodoResponseDto {
    const todoToUpdate = data.todo.find((todo) => todo.id === id);
    if (!todoToUpdate) {
      throw new NotFoundException('todo not found');
    }
    const todoIndex = data.todo.findIndex((todo) => todo.id === id);
    const updatedTodo = {
      ...todoToUpdate,
      ...todo,
    };

    data.todo[todoIndex] = updatedTodo;

    return updatedTodo;
  }

  deleteTodo(id: string): void {
    const todoIndex = data.todo.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException('todo not found');
    }
    data.todo.splice(todoIndex, 1);
    return;
  }
}
