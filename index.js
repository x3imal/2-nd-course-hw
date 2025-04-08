//Задание 1
let a = 2;
for (let i = 0; i < a; i++) {
    console.log("Привет!");
}


//Задание 2
let b = 0;
while (b <= 4) {
    b++;
    console.log(b)
}


//Задание 3
let x = 6;
while (x <= 21) {
    x++;
    console.log(x)
}

//Задание 4
let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (const objKey in obj) {
    console.log(`имя сотрудника: ${objKey} — зарплата ${obj[objKey]}  долларов`);
}

//Задание 5
let n = 1000;
let i = 0;
while (n > 50) {
    n = n/2;
    i++;
}
console.log(`Число в результате: ${n}, кол-во итераций: ${i}`)

//Задание 6
let friday = 5;
let dayMans = 31;
for (let i = friday; i <= dayMans; i += 7) {
    console.log(`Сегодня пятница ${i} число`)
}

