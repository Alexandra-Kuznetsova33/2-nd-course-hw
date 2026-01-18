//Задание 4. Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. 
//Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. 
//Используйте setTimeout.

function delayForSecond(callback) {
  setTimeout (callback, 1000);
}
delayForSecond(function () {
   console.log('Привет, Глеб!');
})

