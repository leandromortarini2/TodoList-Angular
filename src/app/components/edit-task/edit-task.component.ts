import { GetTaskIdService } from './../../services/get-task-id.service';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ITodo } from '../../interfaces/all.interfaces';
import { DataTaskService } from '../../services/data-task.service';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnChanges {
  @Output() openModal = new EventEmitter();
  @Input() taskId: number = 0; // Asegúrate de que este valor sea actualizado

  task: ITodo = {
    id: 0,
    title: '',
    description: '',
    status: '',
    type: '',
  };

  constructor(
    public getTaskIdService: GetTaskIdService,
    public dataTaskService: DataTaskService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskId'] && this.taskId) {
      this.edit(this.taskId);
    }
  }

  onOpenModal() {
    this.openModal.emit();
  }

  edit(id: number) {
    this.getTaskIdService.getTaskIdService(id).subscribe({
      next: (data) => {
        this.task = data;
        this.dataTaskService.setTask(this.task);
      },
      error: (error) => {
        console.error('Error al obtener la tarea:', error);
      },
    });
  }
}
