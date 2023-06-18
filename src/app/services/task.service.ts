import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TASKS } from 'src/app/data/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
