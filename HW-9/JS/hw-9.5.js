//Задание 5. Работа с querySelectorAll

//Задача: создайте несколько элементов <p> с разными классами. Используйте querySelectorAll, чтобы найти все элементы с классом description и изменить их текст.

//Инструкция:
//В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
//Используйте querySelectorAll для поиска всех элементов с классом description. Переберите найденные элементы и измените их текстовое содержимое.

// Как должно работать: после выполнения скрипта все элементы с классом description изменяют свой текст на «Новый текст».

const btn5 = document.querySelector('.btn5');

    btn5.addEventListener('click', function() {
        const descrip5 = document.querySelectorAll('.description5');

        descrip5.forEach(item => {
            item.textContent = 'Новый текст'; 
        });
    });