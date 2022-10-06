import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todu';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {

  @Input()
  todoList: Todo[] | null = []

  @Output()
  delete = new EventEmitter<number>()

  @Output()
  toggle = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.delete.emit(id)
  }

  onToggle(event: MouseEvent, id: number) {
    event.preventDefault()
    this.toggle.emit(id)
  }

}
