//Задание 7
//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования:
let caseNumber = getRandomInRange(10, 20);
console.log(caseNumber); 

