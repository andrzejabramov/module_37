const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите любое число: ', (userInput) => {
    // Приводим к числу
    const num = Number(userInput);

    // Создаем массив
    const arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }

    // Выводим результат
    console.log(arr);

    // Закрываем интерфейс ввода
    readline.close();
});