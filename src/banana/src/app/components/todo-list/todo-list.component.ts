import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: object[];

  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        'Id': 1,
        'Title': 'Todo 1',
        'Description': 'This is my first Todo',
        'Status': true
      },
      {
        'Id': 2,
        'Title': 'Todo 2',
        'Description': 'This is my second Todo',
        'Status': false
      },
      {
        'Id': 3,
        'Title': 'Todo 3',
        'Description': 'This is my third Todo',
        'Status': false
      }];
  }
}
