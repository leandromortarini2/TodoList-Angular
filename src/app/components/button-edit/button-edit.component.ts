import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EditStatusService } from '../../services/edit-status.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button-edit',
  standalone: true,
  imports: [MatButtonModule, NgClass],
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.scss'],
})
export class ButtonEditComponent {
  @Input() id: number = 0;
  @Input() status: string = '';
  @Output() statusChange = new EventEmitter<string>(); // Evento de emisión para el nuevo estado

  constructor(private editStatus: EditStatusService) {}

  submit() {
    if (this.id !== 0) {
      this.editStatus.EditStatusService(this.id).subscribe(
        (data) => {
          if (data && data.message) {
            this.status = data.message;
            this.statusChange.emit(this.status); // Emitimos el nuevo estado
          } else {
            console.error('Error: No message in response');
          }
        },
        (error) => {
          console.error('Error updating task status:', error);
        }
      );
    }
  }
}
