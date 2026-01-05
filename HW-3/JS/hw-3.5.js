//ЗАДАНИЕ 5

let monthNumber = 12;

// Если номер месяца больше 13 — прекращается выполнение 
if (monthNumber > 13) {
  console.log('Номер месяца > 13. Программа не выполняется.');
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log('зима');
      break;
    case 3:
    case 4:
    case 5:
      console.log('весна');
      break;
    case 6:
    case 7:
    case 8:
      console.log('лето');
      break;
    case 9:
    case 10:
    case 11:
      console.log('осень');
      break;
    default:
      // при monthNumber <= 0 или monthNumber === 13
      console.log('Номер месяца вне диапазона 1–12');
  }
}
