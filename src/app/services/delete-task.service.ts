import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeleteTaskService {
  private apiUrl = 'http://localhost:3000/delete-task/';

  constructor(private http: HttpClient) {}

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
