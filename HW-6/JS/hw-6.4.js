//ЗАДАНИЕ 4: С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const array = [];

for (let i = 0; i < 3; i++) {
  const array2 = [];
  for (let i = 0; i < 3; i++) {
    array2.push(1)
  }
  array.push(array2)
}

console.log(array);