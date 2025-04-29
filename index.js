//задание 1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

//задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break;
    }
}

//задание 3
const arr3 = [1, 3, 5, 10, 20];
let arr3Copy = arr3.join(' ');
console.log(arr3Copy);

//задание 4
function createMatrix() {
    let rows = 3;
    let cols = 3;
    let emptyArr = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(1);
        }
        emptyArr.push(row);
    }

    return emptyArr;
}
createMatrix()

//задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

//Задание 7
const arr7 = [9, 8, 7, 6, 5];
let answerUser1 = Number(prompt("Угадайте число"))

if (arr7.includes(answerUser1)) {
    alert("Угадал")
} else {
    alert("Не угадал")
}

//Задание 8
let line = "abcdef";
const arr8 = line.split("");
console.log(arr8.reverse());

//Задание 9
const arr9 = [[1, 2, 3],[4, 5, 6]];
const arrNew9 = [];
for (let i = 0; i < arr9.length; i++) {
    for (let j = 0; j < arr9[i].length; j++) {
        arrNew9.push(arr9[i][j]);
    }
}
console.log(arrNew9);

//Задание 10
const arr10 = [];

for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    arr10.push(randomNumber);
}

for (let i = 0; i < arr10.length - 1; i++) {
    let sum = arr10[i] + arr10[i + 1];
    console.log(`Сумма элементов ${arr10[i]} и ${arr10[i + 1]}: ${sum}`);
}

console.log(arr10);

//Задание 11
function getSquares(arr) {
    return arr.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);

console.log(squares);

//Задание 12
function worlds(arr) {
    return arr.map(word => word.length);
}

const words = ["apple", "banana", "kiwi", "orange"];
const lengths = worlds(words);

console.log(lengths);

//Задание 13
function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

const numbers2 = [1, -2, 3, -4, 5, -6];
const negatives = getNegativeNumbers(numbers2);

console.log(negatives);

//Задание 14
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenNumbers = randomArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", randomArray);
console.log("Массив с чётными числами:", evenNumbers);

//Задание 15
const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const average = randomNumbers.reduce((sum, num) => sum + num, 0) / randomNumbers.length;

console.log("Массив:", randomNumbers);
console.log("Среднее арифметическое:", average);
