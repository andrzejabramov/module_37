// Объект person из предыдущего примера
const person = {
    name: 'John',
    age: 30
};

// Функция setFullName
function setFullName(fullName) {
    this.fullName = fullName;
}

// Создаем новую функцию с помощью bind, привязанную к объекту person
const setPersonFullName = setFullName.bind(person);

// Вызываем функцию с параметром "John Smith"
setPersonFullName("John Smith");

// Проверяем, что свойство fullName добавилось в объект person
console.log(person);