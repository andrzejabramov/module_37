// Создаем функцию printInfo
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Создаем объект person
const person = {
    name: 'John',
    age: 30
};

// Вызываем функцию с помощью call
printInfo.call(person);