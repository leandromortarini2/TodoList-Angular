import { Routes } from '@angular/router';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';
import { AddTaskComponentComponent } from './components/add-task-component/add-task-component.component';

export const routes: Routes = [
  { path: '', component: TaskListComponentComponent }, // Esto es correcto

  {
    path: 'add-tasks',
    component: AddTaskComponentComponent,
  },
];
