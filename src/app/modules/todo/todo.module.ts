import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer'
import { TodoPageComponent } from './page/todo-page/todo-page.component'
import { RouterModule } from '@angular/router'
import { todoRoutes } from './routes'
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component'
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
  ]
})
export class TodoModule { }
