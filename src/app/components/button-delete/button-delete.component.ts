import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeleteTaskService } from '../../services/delete-task.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-delete',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.scss',
})
export class ButtonDeleteComponent {
  @Input() id: number = 0;
  @Output() taskDeleted = new EventEmitter();

  constructor(public deleteTask: DeleteTaskService) {}

  deleteTaskId() {
    Swal.fire({
      icon: 'question',
      title: 'delete task?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: 'swal-confirm-button', // Clase para el botón de confirmación
        cancelButton: 'swal-cancel-button', // Clase para el botón de cancelación
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteTask.deleteTask(this.id).subscribe(
          (response) => {
            console.log('Tarea eliminada con éxito:', response);
            this.taskDeleted.emit('Tarea eliminada');

            Swal.fire({
              icon: 'success',
              title: 'deleted task',
              confirmButtonText: 'ok',
              customClass: {
                confirmButton: 'swal-confirm-button',
              },
            });
          },
          (error) => {
            console.error('Error al eliminar tarea:', error);
          }
        );
      }
    });
  }
}
