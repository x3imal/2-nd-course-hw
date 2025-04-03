//1
let number = 10;
alert(number)
number = 20;
alert(number);


//2
let iphoneData = 2007;
alert(`Дата выхода перового iPhon ${iphoneData}`);

//3
let name = 'Brendan Eich';
alert(`Создатель JS: ${name}`);

//4
let d = 10;
let b = 2;
alert(`Сумма = ${d + b}, разность = ${d - b}, произведение = ${d * b}, частное = ${d / b}`);

//5
let x = 2;
let result = x ** 5;
alert(`${x} в 5 степени: ${result}`);

//6
let a = 9;
let c = 2;
alert(`Остаток от деления: ${a % c}`);

//7
let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num +=1;
num -=1;
alert(num);

//8
let age = Number(prompt('Сколько Вам лет?'));
alert(`Вам: ${age} лет`);

//9
const user = {
    name: "Brendan Eich",
    age: 32,
    isAdmin: false,
}
alert(`Имя: ${user.name}\nВозраст: ${user.age}\nАдмин: ${user.isAdmin ? 'Да' : 'Нет'}`);

//10
let nameUser = String(prompt('Ваше имя?'))
alert(`Привет: ${nameUser}`);
