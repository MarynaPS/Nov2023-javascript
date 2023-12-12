function createUlWithLi5() {
     document.write('<ul>');
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('</ul>');
 }

 createUlWithLi5();
 createUlWithLi5();

function createOlWithLi5() {
     document.write('<ol>');
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('<li>item</li>')
     document.write('</ol>');
 }

createOlWithLi5()

function foobar() {
     createUlWithLi5()
     createOlWithLi5();
 }

foobar();
foobar();
foobar();

function iterator(array) {
     for (const item of array) {
         console.log(item);
     }
 }

 iterator([11, 22, 33]);


 let users = [
     {name: 'vasya', age: 31, status: false},
     {name: 'petya', age: 30, status: true},
     {name: 'kolya', age: 29, status: true},
     {name: 'olya', age: 28, status: false},
     {name: 'max', age: 30, status: true},
     {name: 'anya', age: 31, status: false},
     {name: 'oleg', age: 28, status: false},
     {name: 'andrey', age: 29, status: true},
     {name: 'masha', age: 30, status: true},
     {name: 'olya', age: 31, status: false},
     {name: 'max', age: 31, status: true},
 ];
 iterator(users);

// довжину circle
// pr2
function circleSquare(radius) {
     let res = radius * radius * Math.PI;
     return res;
 }

 let x = circleSquare(10);
 console.log(x);

 let y = circleSquare(123);
 console.log(y);

function asdqwe() {
     // arguments - масив всіх визначених аргументів
     console.log(arguments);
 }

 asdqwe(11, 'asasd', {}, []);
 asdqwe(22, 333, 444, 5555);

function foo() {
    if (arguments.length === 1) {

        return 'asdasd';
    }
    if (arguments.length === 2) {
        //......
        return 'asdqqweq';
    }

    if (arguments.length > 2) {
        //....
        return 'asdqqweq';
    }
}

 foo(10);
 foo(10, 20);

function poipoi() {
     console.log('a');
 }

 function poipoi() {
     console.log('b');
 }
 poipoi();

//rest

 function meteor(a, b, ...items) {
     console.log(a, b, items);

 }

 meteor(11, 22, 33, 44, 55);

let arr = [];

 function pushRandomToArr() {
     arr[arr.length] = Math.round(Math.random() * 10);
 }

 pushRandomToArr();
 pushRandomToArr();
 pushRandomToArr();
 pushRandomToArr();
 console.log(arr);


function generateArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[arr.length] = Math.round(Math.random() * 10);
    }

    return arr;

}

console.log(generateArray(10));
console.log(generateArray(5));
console.log(generateArray(50));

console.log(Math.round(123.123));
