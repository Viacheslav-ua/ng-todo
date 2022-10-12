import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todu';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input()
  todo!: Todo

  @Output()
  delete = new EventEmitter<void>()

  @Output()
  edit = new EventEmitter<void>()

  @Output()
  toggle = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit()
  }

  onEdit() {
    this.edit.emit()
  }

  onToggle(event: MouseEvent) {
    event.preventDefault()
    this.toggle.emit()
  }
}
