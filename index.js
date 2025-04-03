//1
let password = 'пароль';
let passwordUser = prompt('Введите пароль').toLowerCase();
let result = (password === passwordUser)
    ? alert('Пароль введен верно')
    : alert('Пароль введен неправильно');


//2
let c = 9;
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


//3
let d = 101;
let e = 33;
if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


//4
let a = '2';
let b = '3';
let result2 = Number(a) + Number(b);
alert(result2);


//5
let monthNumber = Number(prompt('Введите номер месяца'));
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Неверный номер месяца');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Такого месяца не существует');
    }
}


// Дополнительное задание 1
let num2 = Number(prompt('Пожалуйста, введите любое число '))

if (num2 % 2 === 0) {
    alert('Число четное')
} else {
    alert('Число нечетное')
}

// Дополнительное задание 2
let clientOS = 0;

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке')
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке')
} else {
    console.log('Ошибка')
}

// Дополнительное задание 3
let clientOs2 = 1
let clientDeviceYear = 2015

if (clientDeviceYear < 2015) {
    if (clientOs2 === 0) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else if (clientOs2 === 1) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Ошибка');
    }
} else {
    console.log('Установите приложение по ссылке');
}


