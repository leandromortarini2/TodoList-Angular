import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodoData } from '../interfaces/all.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EditTaskService {
  private apiUrl = 'http://localhost:3000/edit-task/';

  constructor(private http: HttpClient) {}

  editTask(id: number, task: ITodoData) {
    return this.http.put<EditTaskService>(`${this.apiUrl}${id}`, task);
  }
}
