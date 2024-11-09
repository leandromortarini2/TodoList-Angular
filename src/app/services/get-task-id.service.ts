import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/all.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTaskIdService {
  private apiUrl = 'http://localhost:3000/task/';

  constructor(private http: HttpClient) {}

  getTaskIdService(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.apiUrl}${id}`);
  }
}
