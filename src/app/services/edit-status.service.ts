import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditStatusService {
  private apiUrl = 'http://localhost:3000/edit-task/';

  constructor(private http: HttpClient) {}

  EditStatusService(id: number) {
    return this.http.get<EditStatusService>(`${this.apiUrl}${id}`);
  }
}
