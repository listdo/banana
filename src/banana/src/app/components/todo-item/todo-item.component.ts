import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() item: Todo;

  constructor()
  {
    console.log("test")
  }

  ngOnInit(): void {}
}
