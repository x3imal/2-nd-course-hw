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

