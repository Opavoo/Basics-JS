let number = 99; //число
let str = "Peace"; //строка - двойные кавычки
let goodMood = 100; 

const age = 28; //ничего
const string = 'Camels'; //строка - одинарные кавычки
const interpolation = `10`; //строка - косые кавычки

console.log(number == goodMood); //равно 
console.log(str != string); //не равно
console.log(str === string); //строго равно
console.log(interpolation !== number); //строго не равно
console.log(age > str);//больше
console.log(string < str);//меньше
console.log(number >= str);//больше или равно
console.log(goodMood <= interpolation);//меньше или равно

console.log(str + goodMood);//+
console.log(string - interpolation);//-
console.log(goodMood % number);//% взятие остатка от деления
console.log(str * string);// *
console.log(goodMood ** number);//** возведение в степень
let newNumber = number++;//++ инкремент
console.log(newNumber);
let badMood = goodMood--;//-- декремент
console.log(badMood);
