import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../model/todu';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {

  @Input()
  todoList:Todo[] | null = []

  constructor() { }

  ngOnInit(): void {
  }

}
