import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormComponent, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() showModal: boolean = true;
  @Output() close = new EventEmitter<void>(); // Emite un evento sin pasar datos
  @Output() taskUpdatedModal = new EventEmitter<any>();

  // Método para cerrar el modal
  closeModal() {
    this.close.emit();
  }

  onTaskUpdated(taskData: any) {
    this.taskUpdatedModal.emit(taskData); // Asegúrate de emitir el evento al componente padre
  }
}
