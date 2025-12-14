//ЗАДАНИЕ 15: Создайте массив, состоящий из 6 элементов. 
// Элементы массива необходимо сгенерировать с помощью `Math.random()` в диапазоне от 1 до 10.
//Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

function randomNum() {
    return Math.floor(Math.random() * 10);
}

const arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(randomNum());
}

console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);
