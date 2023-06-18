import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';
import { TASKS } from 'src/app/data/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
