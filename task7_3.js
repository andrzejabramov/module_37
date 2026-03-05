// Исходный массив пользователей
const users = [
    { name: 'Анна', age: 25 },
    { name: 'Иван', age: 17 },
    { name: 'Мария', age: 19 },
    { name: 'Петр', age: 16 },
    { name: 'Елена', age: 32 }
];

// 1. Фильтруем пользователей старше или равных 18 лет
const adults = users.filter(user => user.age >= 18);
console.log('Пользователи 18+:', adults);

// 2. Создаем массив с именами отфильтрованных пользователей
const names = adults.map(user => user.name);
console.log('Имена совершеннолетних:', names);