// Функция первой активации игры №1: Угадай число
function gameFirstClick() {
    startGame();
}

// Основная логика игры
function startGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1; 
    let attempts = 0;

    while (true) {
        const userGuess = prompt(`Угадай число от 1 до 100.`); 

        if (userGuess === null) { 
            alert("Игра прервана игроком");
            return;
        }

        const numberGuess = Number(userGuess); 

        if (isNaN(numberGuess)) { 
            alert("Это не число. Попробуй снова.");
            continue;
        }

        attempts++; 

        if (numberGuess === targetNumber) {
            alert(`Верно! Загаданное число было ${targetNumber}.\nКоличество попыток: ${attempts}`);
            break;
        } else if (numberGuess > targetNumber) {
            alert("Твоё число больше загаданного.");
        } else {
            alert("Твоё число меньше загаданного.");
        }
    }
}


//функция активации игры №2: Простая арифметика
//Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
//Запрашивает у пользователя ответ.
//Проверяет правильность ответа и выводит результат.

function gameSecondClick() {
    startGame2();
}
function startGame2() {

    for (let i = 0; i < 5; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = Math.floor(Math.random() * 4);

        let question;
        if (operator === 0) {
            question = `${num1} + ${num2}`;
            const answer = prompt(`Сколько будет ${question}?`);
            const correctAnswer = num1 + num2;

            if (answer === null) { // Если игрок отменил ввод
                alert("Игра прервана игроком");
                return;
            }

            const numberAnswer = Number(answer); 

            if (isNaN(numberAnswer)) { // Проверка на число
                alert("Это не число. Попробуй снова.");
                continue;
            }

            if (numberAnswer === correctAnswer) {
                alert("Верно!");
            } else {
                alert(
                    `Неверно! Правильный ответ: ${correctAnswer}.`
                );
                break;
                }
        }
    
               
        if (operator === 1) {
            question = `${num1} - ${num2}`;
            const answer = prompt(`Сколько будет ${question}?`);
            const correctAnswer = num1 - num2;

            if (answer === null) { // Если игрок отменил ввод
                alert("Игра прервана игроком");
                return;
            }

            const numberAnswer = Number(answer); 

            if (isNaN(numberAnswer)) { // Проверка на число
                alert("Это не число. Попробуй снова.");
                continue;
            }


            if (numberAnswer === correctAnswer) {
                alert("Верно!");
            } else {
                alert(
                     `Неверно! Правильный ответ: ${correctAnswer}.`
                );
                break;
                }
        }
                        
        if (operator === 2) {
            question = `${num1} * ${num2}`;
            const answer = prompt(`Сколько будет ${question}?`);
            const correctAnswer = num1 * num2;

            if (answer === null) { // Если игрок отменил ввод
                alert("Игра прервана игроком");
                return;
            }

            const numberAnswer = Number(answer); 

            if (isNaN(numberAnswer)) { // Проверка на число
                alert("Это не число. Попробуй снова.");
                continue;
            }


            if (numberAnswer === correctAnswer) {
                alert("Верно!");
            } else {
                alert(
                    `Неверно! Правильный ответ: ${correctAnswer}.`
                );
                break;
            }
        }
       
        if (operator === 3) {
            question = `${num1} / ${num2}`;
            const answer = prompt(`Сколько будет ${question}?`);
            const correctAnswer = num1 / num2;
            const correctAnswerRound = correctAnswer.toFixed(2);

            if (answer === null) { // Если игрок отменил ввод
                alert("Игра прервана игроком");
                return;
            }

            const numberAnswer = Number(answer); 

            if (isNaN(numberAnswer)) { // Проверка на число
                alert("Это не число. Попробуй снова.");
                continue;
            }


            if (Math.abs(Number(correctAnswerRound) - numberAnswer) <= 0.01) {
                alert("Верно!");
            } else {
                alert(
                    `Неверно! Правильный ответ: ${correctAnswerRound}.`
                );
                break;
            }
        }
             
        if (i === 4) {
            alert(
                "Поздравляем! Вы прошли все 5 уровней!"
            );  
            break;
        }     
    }
}


//функция активации игры №3: Переверни текст.
//Сайт запрашивает у пользователя текст.
//Сайт переворачивает введенный текст.
//Сайт выводит перевернутый текст.одит результат.

function gameThreeClick() {
    startGame3();
}
function startGame3() {
    
    const input = prompt("Введите текст:");

    if (input === null) { // Если игрок отменил ввод
            alert("Игра прервана игроком");
            return;
        }
    
    if(input !== null && input.trim() !== "") { 

        const flippedText = input.split("").reverse().join("");
        alert(`Ваш перевернутый текст:\n${flippedText}`);   

    } else {
        alert("Вы ничего не ввели.");
    }
}


//функция активации игры №5: ПРостая Викторина.
//Сайт предлагает несколько вопросов и вариантов ответов.
//Запрашивает у пользователя ответы на каждый вопрос.
//Подсчитывает и выводит количество правильных ответов.

function gameFiveClick() {
    startGame5();
}
    // Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет неба?",
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

// Функция начала викторины
function startGame5() {
    let score = 0; 

    for(let i = 0; i < quiz.length; i++) {

        let questionStr = `${quiz[i].question}\n`;
        quiz[i].options.forEach(option => questionStr += option + "\n");

        
        let userAnswer = prompt(questionStr);

        if (userAnswer === null) {
            alert("Игра прервана игроком");
            return;
        }

        userAnswer = parseInt(userAnswer);

        if(userAnswer === quiz[i].correctAnswer) {
            score++;
        }

    }
    
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}



//функция активации игры №4: «Камень, ножницы, бумага».
//Сайт запрашивает у пользователя его выбор (камень, ножницы, бумага).
//Генерирует случайный выбор компьютера.
//Определяет победителя и выводит результат.


function gameFourClick() {
    startGame4();
}

function startGame4() {
    let playerScore = 0,
        computerScore = 0;

    for (let round = 1; round <= 3; round++) {
        let playerChoice = prompt(`Раунд #${round}. Выберите 'камень', 'ножницы' или 'бумага':`);
        if (playerChoice === null) {
            alert("Игра прервана игроком");
            return;
        }

        playerChoice = playerChoice.toLowerCase();

        while (!['камень', 'ножницы', 'бумага'].includes(playerChoice)) {
            alert('Некорректный выбор. Попробуйте снова.');
            playerChoice = prompt(`Раунд #${round}. Выберите 'камень', 'ножницы' или 'бумага':`);
            if (playerChoice === null) {
                alert("Игра прервана игроком");
                return;
            }
            playerChoice = playerChoice.toLowerCase();
        }

        const choices = ['камень', 'ножницы', 'бумага'];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (playerChoice === computerChoice) {
            result = "Ничья!";
        } else if (
            (playerChoice === 'камень' && computerChoice === 'ножницы') ||
            (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
            (playerChoice === 'бумага' && computerChoice === 'камень')
        ) {
            result = "Победил игрок!";
            playerScore++; 
        } else {
            result = "Победил компьютер!";
            computerScore++; 
        }

        alert(
            `Раунд #${round}: Ваш выбор: ${playerChoice}, Выбор компьютера: ${computerChoice}.\nРезультат: ${result}`
        );
    }

    let finalResult;
    if (playerScore > computerScore) {
        finalResult = "Игрок выиграл матч!";
    } else if (playerScore < computerScore) {
        finalResult = "Компьютер выиграл матч!";
    } else {
        finalResult = "Матч закончился ничьей!";
    }

    alert(`Итог матча:\nИгрок: ${playerScore} победы\nКомпьютер: ${computerScore} победы\nФинальный результат: ${finalResult}`);
}


//функция активации игры №6: Генератор случайных цветов
//Игра, в которой при каждом клике на кнопку цвет фона страницы меняется на случайный цвет.

function gameSixClick() {
    startGame6();
}
    
    function randomHexColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16); 
    }


    function startGame6() {
        const mainElement = document.querySelector('.main');
        if (!mainElement) return;

        let newColor = randomHexColor(); 
        mainElement.style.backgroundColor = newColor; 
    }








