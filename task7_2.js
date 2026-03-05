function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

// apply с null в качестве контекста
const result = calculate.apply(null, [2, 3, '+']);
console.log(result); // 5