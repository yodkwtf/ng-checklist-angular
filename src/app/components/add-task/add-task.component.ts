import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
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
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.task) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      task: this.task,
      day: moment(this.day).format('MMMM Do [at] h:mma'),
      reminder: this.reminder,
    };

    this.handleAddTask.emit(newTask);

    this.task = '';
    this.day = '';
    this.reminder = false;
  }
}
