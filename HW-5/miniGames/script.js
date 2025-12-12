// Функция первой активации игры
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