const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

Object.values(obj).forEach(value => {
    if (Array.isArray(value)) {
        arrValues.push(...value); // spread operator добавляет все элементы массива
    } else {
        arrValues.push(value);
    }
});

console.log(arrValues);