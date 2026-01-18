//Задание 6
//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function generateRandomArray(maxNumber) {
  let arrayLength = Math.floor(maxNumber / 2);

  let randomArray = new Array(arrayLength);

  for (let i = 0; i < arrayLength; i++) {
    randomArray[i] = Math.floor(Math.random() * (maxNumber + 1));
  }

  return randomArray;
}

// Пример использования функции
let result = generateRandomArray(10);
console.log(result); 