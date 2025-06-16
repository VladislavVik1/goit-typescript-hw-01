function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// Приклад для перевірки:
const user = merge(
  { name: 'Alice', age: 25 },
  { role: 'admin', active: true }
);

console.log(user);
// Очікувано:
// { name: 'Alice', age: 25, role: 'admin', active: true }
