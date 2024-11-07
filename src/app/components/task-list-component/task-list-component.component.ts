import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ITodo } from '../../interfaces/all.interfaces';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { GetAllTasksService } from '../../services/get-all-tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonEditComponent } from '../button-edit/button-edit.component';
import { ButtonDeleteComponent } from '../button-delete/button-delete.component';
@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatDialogModule,
    HttpClientModule,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ButtonDeleteComponent,
  ],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.scss',
})
export class TaskListComponentComponent {
  tasks: ITodo[] = [];

  constructor(public allTasks: GetAllTasksService) {}

  ngOnInit(): void {
    this.getAllTasks(); // Llamar a la función al iniciar el componente
  }

  getAllTasks() {
    this.allTasks.getAllTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  // Método para manejar el cambio de estado
  onStatusChange(newStatus: string, taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = newStatus; // Actualizar el estado de la tarea
      console.log(`Estado de la tarea ${taskId} actualizado a ${newStatus}`);
    }
  }

  onTaskDeleted(taskId: number): void {
    console.log('Tarea eliminada:', taskId);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
