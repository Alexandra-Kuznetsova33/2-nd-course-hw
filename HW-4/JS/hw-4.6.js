//ЗАДАНИЕ 6

// Переменная для хранения номера первой пятницы месяца
let firstFriday = 5; 

if (firstFriday < 1 || firstFriday > 7) {
    console.log('Неверный номер первой пятницы. Укажите число от 1 до 7.');
} else {
    for (let day = firstFriday; day <= 31; day += 7) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);    
    }
}
