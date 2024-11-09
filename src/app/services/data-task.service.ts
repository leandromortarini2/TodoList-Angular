import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../interfaces/all.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataTaskService {
  constructor() {}

  public taskSubject = new BehaviorSubject<any | null>(null);

  task$ = this.taskSubject.asObservable();

  setTask(task: ITodo) {
    this.taskSubject.next(task);
  }

  getTask(): Observable<ITodo> {
    return this.taskSubject.asObservable();
  }
}
