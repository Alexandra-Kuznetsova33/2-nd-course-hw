//Задание 10
//Написать функцию, которая принимает дату и возвращает ее в формате:
//Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]


function formatRussianDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const daysOfWeek = [
    'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
  ];

  let day = date.getDate();           
  let monthIndex = date.getMonth();   
  let year = date.getFullYear();       
  let hours = date.getHours();         
  let minutes = date.getMinutes();     
  let seconds = date.getSeconds();     
  let weekDayIndex = date.getDay();    

  hours = ('0' + hours).slice(-2);    
  minutes = ('0' + minutes).slice(-2);
  seconds = ('0' + seconds).slice(-2);

  
  let output = `
Дата: ${day} ${months[monthIndex]} ${year} — это ${daysOfWeek[weekDayIndex]}
Время: ${hours}:${minutes}:${seconds}
`;

  return output.trim();                
}

// Пример использования
let myDate = new Date();               
console.log(formatRussianDate(myDate));