import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../interfaces/all.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetAllTasksService {
  private apiUrl = 'http://localhost:3000/all-tasks';

  tasks = [];

  constructor(private http: HttpClient) {
    this.tasks = [];
  }

  getAllTasks() {
    return this.http.get<ITodo[]>(this.apiUrl);
  }
}
