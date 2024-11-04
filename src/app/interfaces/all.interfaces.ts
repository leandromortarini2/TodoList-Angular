export interface ITodo {
  id: number;
  title: string;
  type: ITodoType;
  description: string;
  status: ITodoStatus;
}

export type ITodoStatus = 'pending' | 'in-progress' | 'finished';

export type ITodoType = 'view' | 'component' | 'service';
