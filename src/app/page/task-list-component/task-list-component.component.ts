import { EditTaskComponent } from './../../components/edit-task/edit-task.component';
import { ButtonDeleteComponent } from './../../components/button-delete/button-delete.component';
import { ButtonEditComponent } from './../../components/button-edit/button-edit.component';
import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ITodo } from '../../interfaces/all.interfaces';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { GetAllTasksService } from '../../services/get-all-tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from '../../components/modal/modal.component';

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
    EditTaskComponent,
    ModalComponent,
  ],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.scss',
})
export class TaskListComponentComponent {
  tasks: ITodo[] = [];
  @Output() openModal = new EventEmitter();
  showModal = false;

  trackByTaskId(index: number, task: ITodo): number {
    return task.id;
  }

  constructor(
    public allTasks: GetAllTasksService,
    public cdRef: ChangeDetectorRef
  ) {}

  // MODAL
  // MODAL
  onOpenModal() {
    this.showModal = true; // Cuando se emite el evento, mostramos el modal
  }

  onCloseModal() {
    this.showModal = false; // Método para cerrar el modal
  }

  // SOLICITUD DE DATOS
  // SOLICITUD DE DATOS

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

  onTaskUpdated(taskUpdatedModal: any) {
    console.log(taskUpdatedModal);
    this.getAllTasks();

    this.tasks = this.tasks
      .map((task) =>
        task.id === taskUpdatedModal.id
          ? { ...task, ...taskUpdatedModal }
          : task
      )
      .slice(); // Usar `slice()` para crear una copia y forzar el cambio
  }
}
