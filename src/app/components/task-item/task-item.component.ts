import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() handleDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() handleToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  handleDelete(task: Task) {
    this.handleDeleteTask.emit(task);
  }

  handleReminder(task: Task) {
    this.handleToggleReminder.emit(task);
  }
}
