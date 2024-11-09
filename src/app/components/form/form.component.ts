import { ITodo } from './../../interfaces/all.interfaces';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import Swal from 'sweetalert2';
import { DataTaskService } from '../../services/data-task.service';
import { CommonModule } from '@angular/common';
import { EditTaskService } from '../../services/edit-task.service';
import { log } from 'console';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() taskUpdated = new EventEmitter<any>();

  task!: ITodo;

  form!: FormGroup;

  constructor(
    public dataTaskService: DataTaskService,
    private formBuilder: FormBuilder,
    public editTaskService: EditTaskService
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.dataTaskService.getTask().subscribe((data) => {
      this.task = data;
      this.form.patchValue({
        title: this.task.title,
        type: this.task.type,
        description: this.task.description,
      });
    });
  }

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
        this.editTaskService
          .editTask(this.task.id, this.form.value)
          .subscribe();

        this.taskUpdated.emit(this.form.value);

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
