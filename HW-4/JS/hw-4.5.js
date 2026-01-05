//ЗАДАНИЕ 5

let n = 1000;
let num = 0;

while(n >= 50){
    n /= 2;
    num++;
}

console.log("Итоговое значение:", n);
console.log("Количество итераций:", num);