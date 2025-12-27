// Функция первой активации игры №1: Угадай число
function gameFirstClick() {
    startGame();
}

// Основная логика игры
function startGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    let attempts = 0;

    while (true) {
        const userGuess = prompt(`Угадай число от 1 до 100.`); // Просим пользователя сделать ход

        if (userGuess === null) { // Если игрок отменил ввод
            alert("Игра прервана игроком");
            return;
        }

        const numberGuess = Number(userGuess); // Преобразуем строку в число

        if (isNaN(numberGuess)) { // Проверка на корректность ввода
            alert("Это не число. Попробуй снова.");
            continue;
        }

        attempts++; // увеличиваем на 1 количество попыток

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