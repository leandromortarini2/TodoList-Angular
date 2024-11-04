import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { tasksArray } from '../../utils/taksArray';
import { ITodo } from '../../interfaces/all.interfaces';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.scss',
})
export class TaskListComponentComponent {
  tasks: ITodo[] = tasksArray;

  constructor(dialog: MatDialogModule) {}

  editState(id: number) {
    // Recorremos cada tarea en el array
    const task = this.tasks.find((t) => t.id === id);

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: 'swal-confirm-button', // Clase para el botón de confirmación
        cancelButton: 'swal-cancel-button', // Clase para el botón de cancelación
      },
      buttonsStyling: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (task) {
          task.status =
            task.status === 'in-progress'
              ? 'finished'
              : task.status === 'pending'
              ? 'in-progress'
              : 'pending';
          Swal.fire({
            icon: 'success',
            confirmButtonText: 'ok',
            customClass: {
              confirmButton: 'swal-confirm-button',
            },
          });
        }
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
