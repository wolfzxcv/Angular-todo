import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: '1f4e6f01-1179-4db0-a97c-a856406eb25e',
        title: 'to do 1',
        completed: false,
      },
      {
        id: 'a4bdb88e-d78c-4c25-9753-6fd1b415237f',
        title: 'to do 2',
        completed: true,
      },
      {
        id: '3ddd3e07-09b1-41bd-8a0e-9e6e58556d49',
        title: 'to do 3',
        completed: false,
      },
    ];
  }
}
