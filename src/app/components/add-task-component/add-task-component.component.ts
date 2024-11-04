import { RouterLink } from '@angular/router';
import { ViewEncapsulation, Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { tasksArray } from '../../utils/taksArray';
import { ITodo } from '../../interfaces/all.interfaces';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task-component',
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Permitir que los estilos sean globales
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    JsonPipe,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.scss'],
})
export class AddTaskComponentComponent {
  tasks: ITodo[] = tasksArray;

  //? Signal  contiene el formulario reactivo de Angular, almacenado en una señal (`signal`) para manejar el estado reactivo

  form = signal<FormGroup>(
    new FormGroup({
      title: new FormControl(''),
      selector: new FormControl(''),
      description: new FormControl(''),
    })
  );

  //? Método que se ejecuta al enviar el formulario

  submit() {
    Swal.fire({
      icon: 'question',
      title: 'Create new task?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: 'swal-confirm-button', // Clase para el botón de confirmación
        cancelButton: 'swal-cancel-button', // Clase para el botón de cancelación
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tasks.push({
          id: this.tasks.length + 1,
          title: this.form().value.title,
          type: this.form().value.selector,
          description: this.form().value.description,
          status: 'pending',
        });
        Swal.fire({
          icon: 'success',
          confirmButtonText: 'ok',
          customClass: {
            confirmButton: 'swal-confirm-button',
          },
        });
      }
    });
  }
}
