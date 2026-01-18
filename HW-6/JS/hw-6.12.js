//ЗАДАНИЕ 12: Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

function getLength(arr12) {
  return arr12.map(item => item.length);
}

console.log(getLength(['homework', 'massive'])); 
