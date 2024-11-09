import { Routes } from '@angular/router';
import { AddTaskComponentComponent } from './page/add-task-component/add-task-component.component';
import { EditTaskPageComponent } from './page/edit-task-page/edit-task-page.component';
import { TaskListComponentComponent } from './page/task-list-component/task-list-component.component';

export const routes: Routes = [
  { path: '', component: TaskListComponentComponent }, // Esto es correcto

  {
    path: 'add-tasks',
    component: AddTaskComponentComponent,
  },
  // {
  //   path: 'edit-task',
  //   component: EditTaskPageComponent,
  // },
];
