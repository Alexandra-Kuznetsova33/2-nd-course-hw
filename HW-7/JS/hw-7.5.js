//Задание 5. Создать функцию, которая выводит в консоль случайное число от 1 до 10.
//Подсказка Используйте функции Math.random() и Math.floor() для генерации случайных чисел.

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomVal = randomNumber(1, 10);
console.log(randomVal);