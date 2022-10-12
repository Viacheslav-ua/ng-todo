import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todu';

@Component({
  selector: 'app-todo-list-item-edit',
  templateUrl: './todo-list-item-edit.component.html',
  styleUrls: ['./todo-list-item-edit.component.css']
})
export class TodoListItemEditComponent implements OnInit {

  name = ''

  @Input()
  todo!: Todo

  @Output()
  edit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.name = this.todo.name
  }

  onEdit() {
    if (this.name) {
      this.edit.emit(this.name)
    }
  }

  onCancel() {
    this.name = this.todo.name
  }

}
