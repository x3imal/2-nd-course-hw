//Задания 1
function minimumReturn(a, b) {
    return a < b ? a : b;
}
console.log(minimumReturn(8, 6));


//Задание 2
let userNum = Number(prompt("Enter a number"));
function stringNumber(n) {
    if (isNaN(n)) {
        console.log("Это не число");
    } else if (n % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}
stringNumber(userNum);


//Задание 3
function square(a) {
    console.log(a ** 2);
}
square(3);

function square2(a) {
    return a ** 2;
}
console.log(square2(3));


//Задание 4
let userAge = Number(prompt('What is your age?'));

function howUserAge(a) {
    if (a < 0) {
        return alert('Вы ввели неправильное значение');
    } else if (a === 0 || a <= 12) {
        return alert("Привет, друг!")
    } else {
        return alert("Добро пожаловать!");
    }
}
howUserAge(userAge);


//Задание №5
function howNumber(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return alert("Одно или оба значения не являются числом");
    } else {
        return alert(x * y);
    }
}
howNumber(5, "");



//Задание №6
function howNumberNew () {
    let num = Number(prompt('Enter a number'));
    if (isNaN(num)) {
        return alert('Переданный параметр не является числом');
    } else {
        return alert(`${num} в кубе равняется ${num**3}`);
    }
}
howNumberNew();


//Задание №7
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 20,
    getArea,
    getPerimeter
};

const circle2 = {
    radius: 100,
    getArea,
    getPerimeter
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());






