import './basic/1';
import './basic/2';
import './basic/3';
import './basic/4';
import { isWeekend, DayOfWeek } from './basic/5';
console.log('Субота — вихідний?', isWeekend(DayOfWeek.Saturday));
import './basic/6';
import './basic/7';

import { fetchData } from './generics/1';
// fetchData<any>('https://jsonplaceholder.typicode.com/todos/1').then(console.log);

import { compare } from './generics/2';
console.log(compare({ name: 'A', color: 'red' }, { position: 1, weight: 10 }));

import { merge } from './generics/3';
console.log(merge({ a: 1 }, { b: 2 }));

import { createOrUpdateUser } from './generics/4';
createOrUpdateUser({ email: 'test@mail.com', password: '123456' });

import { UserRole, RoleDescription } from './generics/5';
console.log(RoleDescription[UserRole.admin]);

import type { Params } from './generics/6';
const example: Params = {
  email: 'a@mail.com',
  firstName: null,
  lastName: null,
  phone: null,
};
console.log(example);
