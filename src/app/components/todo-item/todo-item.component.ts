import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // set dymanic class
  setClass() {
    let classes = {
      'check-true': this.todo.completed,
      'check-false': !this.todo.completed,
    };
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log('delete', todo.title);
  }
}
