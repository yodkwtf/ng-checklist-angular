import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TASKS } from 'src/app/data/mock-tasks'; // Import the mock data

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = TASKS; // Assign the mock data to the tasks property
}
