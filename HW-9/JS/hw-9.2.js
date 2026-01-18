//Задание 2. Изменение стиля элемента

//Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.

//Инструкция:
//В HTML создайте абзац <p> и кнопку. 
// Используйте метод querySelector для получения ссылки на абзац и кнопку.
//Используйте событие click и метод addEventListener, чтобы изменить стиль элемента, например его цвет.

//Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.

    const paragraph = document.querySelector('.paragraph2');
    const button2 = document.querySelector('.btn2');

    button2.addEventListener('click', () => {
      paragraph.style.color = 'blue'; 
    });

