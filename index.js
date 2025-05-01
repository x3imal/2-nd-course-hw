// Задание 1
let js = "js";
console.log(js.toUpperCase());

//Задание 2
function filterBySecondLine(array) {
    if (array.length < 2) return [];
    const prefix = array[1].toLowerCase();
    return array.filter(str => str.toLowerCase().startsWith(prefix));
}

const array1 = [
    "бабка ела кашу и всех ей кормила",
    "петя гулял по саду и собаку свою он ждал",
    "маша с друзьями на лето поехала в деревню",
    "они вместе в поле работали и отдыхали",
    "вечером у костра пели песни и смотрели на звезды"
]
const result1 = filterBySecondLine(array1);
console.log(result1);

//Задание 3
let num1 = 32.58884;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));

//Задание 4
const arrayMinMax = [52, 53, 49, 77, 21, 32];

function returnMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log("Минимум:", min);
    console.log("Максимум:", max);
}

returnMinMax(arrayMinMax);

//Задание 5
function randomNum () {
    console.log(Math.round(Math.random() * 10));
}

randomNum()

//Задание 6
function randomInt(num) {
    const array = [];
    const length = Math.floor(num / 2);
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * num);
    }
    return array;
}

console.log(randomInt(10));

//Задание 7
function randomInt(num1, num2) {
    return Math.floor(Math.random() * (num1 - num2)) + num2;
}

console.log(randomInt(6, 10));

//Задание 8
let date = new Date();
console.log(date);

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function getDataRussian(date) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekDay = days[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    console.log(`Дата: ${day} ${month} ${year} — это ${weekDay}.`);
    console.log(`Время: ${hours}:${minutes}:${seconds}`);
}

getDataRussian(currentDate);



