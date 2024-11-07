import { ITodoData } from './../interfaces/all.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskService {
  private apiUrl = 'http://localhost:3000/create-task';

  constructor(private http: HttpClient) {}

  createTask(task: ITodoData) {
    console.log('Task sent to backend:', task);

    return this.http.post<ITodoData>(this.apiUrl, task);
  }
}
