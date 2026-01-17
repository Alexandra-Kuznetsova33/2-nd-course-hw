//Задание 6. Добавление нового элемента в DOM
//Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

//Инструкция:
//В HTML создайте кнопку.
//Используйте метод createElement для создания нового элемента.
//Используйте appendChild для добавления нового элемента в конец документа при нажатии на кнопку.

//Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».

    const btn6 = document.querySelector('.btn6');

    btn6.addEventListener('click', function() {
        let newParagraph = document.createElement('p');

        newParagraph.textContent = 'Новый абзац';

        document.body.appendChild(newParagraph);
    });