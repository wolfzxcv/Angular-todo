import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../components/models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
    // return [
    //   {
    //     id: '1f4e6f01-1179-4db0-a97c-a856406eb25e',
    //     title: 'to do 1',
    //     completed: false,
    //   },
    //   {
    //     id: 'a4bdb88e-d78c-4c25-9753-6fd1b415237f',
    //     title: 'to do 2',
    //     completed: true,
    //   },
    //   {
    //     id: '3ddd3e07-09b1-41bd-8a0e-9e6e58556d49',
    //     title: 'to do 3',
    //     completed: false,
    //   },
    // ];
  }
  // add todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }
  // toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
