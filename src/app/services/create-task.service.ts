import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodoData } from '../interfaces/all.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskService {
  private apiUrl = 'http://localhost:3000/create-task';

  tak = [];

  constructor(private http: HttpClient) {
    this.tak = [];
  }

  createTask(task: ITodoData) {
    return this.http.post<ITodoData>(this.apiUrl, task);
  }
}
