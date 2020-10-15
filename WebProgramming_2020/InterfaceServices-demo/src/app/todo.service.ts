import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];
  constructor() { }


  addTodo(title: string){
    this.todos.push(new Todo(title, false));
  }

  
  removeTodo(todo: Todo){
    var index = this.todos.indexOf(todo);
    this.todos = this.todos.splice(index, 1);
  }

}
