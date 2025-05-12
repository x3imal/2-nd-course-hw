//Игра 1
function randomNumberGame() {
    const secretNumb = Math.floor(Math.random() * 100) + 1;
    let userNum = 0;

    while (userNum !== secretNumb) {
        userNum = Number(prompt('Угадай число от 1 до 100'));

        if (userNum < secretNumb) {
            alert('Загаданное число больше');
        } else if (userNum > secretNumb) {
            alert('Загаданное число меньше');
        } else {
            alert(`Угадал! Это было ${secretNumb}`);
        }
    }
}

//Игра 2
function simpleArithmeticGame() {
    const operators = ['+', '-', '*', '/'];

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question;
    let answer;

    switch (operator) {
        case '+':
            question = `${num1} + ${num2} = ?`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2} = ?`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2} = ?`;
            answer = num1 * num2;
            break;
        case '/':
            question = `${num1} ÷ ${num2} = ?`;
            answer = num1 / num2;
            break;
    }

    let answerUser = prompt(`Введите ответ на пример: ${question}`);

    if (Number(answer) === Number(answerUser)) {
        alert("Поздравляю, правильно!");
    } else {
        alert("Неправильно!");
    }
}

//Игра 3
function turnTheTextOver() {
    let userText = prompt("Введите текст!")
    const reversed = userText.split('').reverse().join('');
    alert(reversed);
}


//Игра4
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        const userAnswer = prompt(`${q.question}\n${q.options.join('\n')}`);

        if (parseInt(userAnswer) === q.correctAnswer) {
            score++;
        }
    }

    alert(`Вы правильно ответили на ${score} из ${quiz.length} вопросов!`);
}

//Игра 5
function rockPaperScissors() {
    let userAnswer = prompt("Камень, ножницы или бумага?");
    const rules = {
        камень: "ножницы",
        бумага: "камень",
        ножницы: "бумага"
    };

    let arrAnswer = Object.keys(rules);
    let compAnswer = arrAnswer[Math.floor(Math.random() * arrAnswer.length)];

    if (userAnswer.toLowerCase() === compAnswer) {
        alert("Ничья!");
    } else if (rules[userAnswer.toLowerCase()] === compAnswer) {
        alert("Ты выиграл!");
    } else {
        alert("Компьютер выиграл!");
    }
}

//Игра 6


