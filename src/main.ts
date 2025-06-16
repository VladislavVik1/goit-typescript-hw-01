import { isWeekend } from './basic/5';
import { DayOfWeek } from './basic/5';
import { merge } from './generics/3';


console.log('--- Перевірка вихідного дня ---');
console.log(`Чи субота є вихідним? ->`, isWeekend(DayOfWeek.Saturday)); // true
console.log(`Чи понеділок є вихідним? ->`, isWeekend(DayOfWeek.Monday)); // false

console.log('--- Тест функції merge ---');
const obj1 = { name: 'Anna' };
const obj2 = { age: 25 };
const merged = merge(obj1, obj2);
console.log('Результат merge:', merged);
