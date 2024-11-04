import { ITodo } from '../interfaces/all.interfaces';

export const tasksArray: ITodo[] = [
  {
    id: 1,
    title: 'Create Contact',
    type: 'view',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae pariatur cupiditate, aperiam aut in minus mollitia impedit modi, commodi corporis. Tempore possimus culpa explicabo a animi? Ad, aspernatur obcaecati.',
    status: 'in-progress',
  },
  {
    id: 2,
    type: 'component',
    title: 'Create Table',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae pariatur cupiditate, aperiam aut in minus mollitia impedit modi, commodi corporis. Tempore possimus culpa explicabo a animi? Ad, aspernatur obcaecati.',
    status: 'pending',
  },

  {
    id: 3,
    type: 'service',
    title: 'Create Servicio Users',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae pariatur cupiditate, aperiam aut in minus mollitia impedit modi, commodi corporis. Tempore possimus culpa explicabo a animi? Ad, aspernatur obcaecati.',
    status: 'in-progress',
  },
];
