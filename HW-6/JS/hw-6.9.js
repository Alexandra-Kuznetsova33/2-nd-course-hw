//ЗАДАНИЕ 9: Дан массив: [[1, 2, 3], [4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arr9 = [[1, 2, 3], [4, 5, 6]];
const newArr9 = [];
for (let i = 0; i < arr9.length; i++) {
    newArr9.push(...arr9[i]);
}
console.log(newArr9);