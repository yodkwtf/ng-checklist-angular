import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() handleAddTask: EventEmitter<Task> = new EventEmitter();
  task: string;
  day: string;
  reminder: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.task) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      task: this.task,
      day: this.day,
      reminder: this.reminder,
    };

    this.handleAddTask.emit(newTask);

    this.task = '';
    this.day = '';
    this.reminder = false;
  }
}
