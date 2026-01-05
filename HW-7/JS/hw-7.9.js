//Задание 9
//Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
let todayDay = currentDate.getDate();

currentDate.setDate(todayDay + 73);
console.log(currentDate.toLocaleDateString());