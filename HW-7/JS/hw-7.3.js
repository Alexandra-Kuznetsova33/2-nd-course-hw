//Задание 3. Округлить число 32.58884:

//До меньшего целого.
//До большего целого.
//До ближайшего целого.


let number = 32.58884;

// До меньшего целого
let floorResult = Math.floor(number);
console.log("Округление до меньшего целого:", floorResult); // 32

// До большего целого
let ceilResult = Math.ceil(number);
console.log("Округление до большего целого:", ceilResult); // 33

// До ближайшего целого
let roundResult = Math.round(number);
console.log("Округление до ближайшего целого:", roundResult); // 33