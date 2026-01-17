//задание 2: Создать функцию, которая принимает массив строк и строку. 
//функция должна вернуть новый массив, содержащий только те эемеленты первого массива, которые начинаются со второй строки. 
//Регистр символов не влияет на результат.

function filterByStart(arr, startString) {
  return arr.filter(item => item.toLowerCase().startsWith(startString.toLowerCase()));
}

// Тестируем функцию
const fruits = ['apple', 'banana', 'Avocado', 'orange'];
const filteredFruits = filterByStart(fruits, 'a');
console.log(filteredFruits); 

