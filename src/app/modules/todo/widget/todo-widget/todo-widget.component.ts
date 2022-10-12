import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todu';
import { TodoAsyncStoragesService } from '../../service/todo-async-storages.service';
import { TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction } from '../../store/todo/todo.actions';
import { TodoState } from '../../store/todo/todo.reducer';
import { todoListSelector } from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css'],
})
export class TodoWidgetComponent implements OnInit {

  todoList = []
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector))

  constructor(
    private store$: Store<TodoState>,
    private todoSyncStorage: TodoAsyncStoragesService
  ) { }

  ngOnInit(): void {
    this.todoSyncStorage.init()
  }

  onCreate(name: string) {

    this.store$.dispatch(
      new TodoCreateAction({
        name,
      })
    )
  }

  onDelete(id: number) {
    this.store$.dispatch( new TodoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({id}))
  }

  onEdit({id, name}: { id: number, name: string }) {
    this.store$.dispatch(new TodoEditAction({id, name}))
  }

}
