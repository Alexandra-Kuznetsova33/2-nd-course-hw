//Задание 7. Удаление элемента

//Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.

//Инструкция:
//В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
//Используйте метод querySelector для поиска первого элемента с классом description.
//Используйте метод remove для удаления этого элемента при нажатии на кнопку.

//Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом description со страницы.

   const btn7 = document.querySelector('.btn7');

    btn7.addEventListener('click', function() {
        const firstDescription = document.querySelector('.description7');

        if(firstDescription) { 
            firstDescription.remove();
        }
    });
    