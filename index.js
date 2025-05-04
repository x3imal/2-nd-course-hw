const people = [
    {name: 'Глеб', age: 29, gender: 'male'},
    {name: 'Анна', age: 17, gender: 'female'},
    {name: 'Олег', age: 7, gender: 'male'},
    {name: 'Оксана', age: 47, gender: 'female'}
];


//Задача 1
console.log(people.sort((a, b) => a.age - b.age));

//Задание 2
function isPositive(num) {
    return num > 0;
}

function isMale(gender) {
    return gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

console.log(filter(people, isMale));

//Задача 3
let count = 0;
const interval = setInterval(() => {
    console.log(new Date);
    count += 3;

    if(count >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000)

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//Задание 5
function delayForSecond1(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log('Привет, ${name}!');
}
delayForSecond1(() => sayHi('Глеб'));
