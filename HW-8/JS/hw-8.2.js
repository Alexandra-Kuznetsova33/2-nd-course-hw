//Задание 2. Реализуйте функцию filter, которая должна работать аналогично методу массива filter. 
//Возьмите за основу функцию map, которую мы реализовывали на уроке.
//Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.


function isPositive(num) {
  return num > 0;
}
     
function isMale(person) {
  return person.gender === 'male';
}
     
function filter(array, ruleFunction) {
  const result = [];
    for (let i = 0; i < array.length; i++) {
      if (ruleFunction(array[i])) {
        result.push(array[i]);
      }
    }
  return result;
}
     
console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));