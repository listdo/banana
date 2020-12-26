import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      new Todo(1, "Todo1", "Todo Text 1", false),
      new Todo(2, "Todo2", "Todo Text 2", true),
      new Todo(3, "Todo3", "Todo Text 3", false)];
  }
}
