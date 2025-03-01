// 1.1
const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);
// 1.2
const squareNumbers = (numbers) => numbers.map(num => num * num);
// 1.3
const filterByProperty = (objects, property) => objects.filter(obj => obj.hasOwnProperty(property));
// 1.4
const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
// 2
const applyFunctionToArray = (func, array) => array.map(func);
// 3.1
const numbers = [23, 32, 2, 55, 3, 2];
const evenNumbers = filterEvenNumbers(numbers);
const squaredEvenNumbers = squareNumbers(evenNumbers);
const sumOfSquares = sumNumbers(squaredEvenNumbers);
console.log("Сумма квадратов четных чисел:", sumOfSquares);

// 3.2
const objects = [
    { value: -1 },
    { value: 544 },
    { value: 23 },
    { value: 9 }
];
const threshold = 4;
const filteredObjects = filterByProperty(objects, 'value');
const valuesAboveThreshold = filteredObjects.filter(obj => obj.value > threshold).map(obj => obj.value);
const average = valuesAboveThreshold.reduce((acc, val) => acc + val, 0) / valuesAboveThreshold.length;
console.log("Среднее арифметическое чисел, больших", threshold + ":", average);

const output = document.getElementById('output');
output.innerHTML = `
    <p>Сумма квадратов четных чисел: ${sumOfSquares}</p>
    <p>Среднее арифметическое чисел, больших ${threshold}: ${average}</p>
`;