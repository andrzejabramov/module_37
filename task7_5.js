function getUniqueSorted(arr) {
    // Set удаляет дубликаты, затем сортируем
    return [...new Set(arr)].sort((a, b) => a - b);
}

// Проверка
const numbers = [5, 2, 8, 1, 3, 5, 2, 8, 7];
console.log(getUniqueSorted(numbers)); // [1, 2, 3, 5, 7, 8]