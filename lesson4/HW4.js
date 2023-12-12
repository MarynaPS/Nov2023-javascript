//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// S=a*b

function areaRect(a, b) {
    let sRect = a * b;
    return sRect;
}
console.log(areaRect(10,20));

//створити функцію яка обчислює та повертає площу кола з радіусом r
//S=Pi*r*r

function circleSquare(radius) {
    let res = radius * radius * Math.PI;
    return res;
}
console.log(circleSquare(20));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//S=2Pi*R*H

function cylindrSquare(h, r) {
let res=2* Math.PI*r*(h+r) ;
return res;
}
console.log(cylindrSquare(5,10));

// створити функцію яка приймає масив та виводить кожен його елемент

function iterator(array) {
    for (const item of array) {
        console.log(item);
    }
}

iterator([11, 'qwe', {}, [22, 33, 55]]);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

function pText(i){
    document.write(`<p>${i}</p>`);
    console.log(arguments);
}
pText('Hello frends')


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulText(i){
    document.write(`<ul>`)
    document.write(`<li>${i}</li>`);
    document.write(`<li>${i}</li>`);
    document.write(`<li>${i}</li>`);
    document.write(`<ul>`);
}
ulText('Lorem ipsum dolor sit amet.')


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function numText(text, num){
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`<ul>`);
}
numText('Lorem ipsum dolor sit amet.', 5);


// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrOut(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
arrOut([11,22,33, null, 'qwe'])

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
    {id:6, name: 'anya', age: 31},
    {id:7, name: 'oleg', age: 28},
    {id:8, name: 'andrey', age: 29},
    {id:9, name: 'masha', age: 30},
    {id:10, name: 'olya', age: 31},
    {id:11, name: 'max', age: 31},
];

function perData(array){
document.write('<ul>');
for (const user of users) {
    document.write(`<li>`);
    for (const userKey in user) {
        document.write(` ${user[userKey]} `);
    }
    document.write(`</li>`);
}
document.write('</ul>');
}

perData(users);

// створити функцію яка повертає найменьше число з масиву

function minOut(arr){
    const minValue=Math.min.apply(null,arr)
    console.log(minValue)
}
minOut([11, 22, 33, 0, -10]);

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sumOut(arr){
    let res=0;
    for (let i=0; i<arr.length; i++){
       res += arr[i]
    }
        return res
}

console.log(sumOut([1,2,10,20,30]))


// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    const num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    return arr;
}
console.log(swap([11,22,33,44],0,1))


// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}
const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));
