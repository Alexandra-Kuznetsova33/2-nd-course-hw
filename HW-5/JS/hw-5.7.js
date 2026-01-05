//ЗАДАНИЕ 7 Создайте два объекта,circle1 и circle2, каждый из которых имеет свойство radius.
//Оба объекта должны иметь:
//Метод getArea, который возвращает площадь круга, вычисляемую через радиус.
//Метод getPerimeter, который возвращает периметр окружности.



function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,  
   
}

const circle2 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter, 
}

console.log(`Площадь круга 1 равна ${circle1.methodGetArea()}`);
console.log(`Площадь круга 2 равна ${circle2.methodGetArea()}`);
console.log(`Периметр круга 1 равен ${circle1.methodGetPerimeter()}`);
console.log(`Периметр круга 2 равен ${circle2.methodGetPerimeter()}`);
