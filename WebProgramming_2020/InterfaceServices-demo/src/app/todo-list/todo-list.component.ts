import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoService: TodoService;
  constructor(todoService: TodoService) {
    this.todoService = todoService;
   }

  ngOnInit() {
    this.todoService.addTodo("Example todo created when this component is created");
  }

}
