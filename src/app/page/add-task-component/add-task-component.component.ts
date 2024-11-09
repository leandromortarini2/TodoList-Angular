import { RouterLink } from '@angular/router';
import { ViewEncapsulation, Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { CreateTaskService } from '../../services/create-task.service';
import { ITodo } from '../../interfaces/all.interfaces';

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
  tasks: ITodo[] = [];

  constructor(public createNewTask: CreateTaskService) {}

  //? Signal  contiene el formulario reactivo de Angular, almacenado en una señal (`signal`) para manejar el estado reactivo

  form = signal<FormGroup>(
    new FormGroup({
      title: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  );

  //? Método que se ejecuta al enviar el formulario

  submit() {
    console.log('Formulario enviado:', this.form().value);

    Swal.fire({
      icon: 'question',
      title: 'Create new task?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.createNewTask.createTask(this.form().value).subscribe();

        Swal.fire({
          icon: 'success',
          confirmButtonText: 'ok',
          customClass: {
            confirmButton: 'swal-confirm-button',
          },
        });

        this.form().setValue({
          title: '',
          type: '',
          description: '',
        });
      }
    });
  }
}
