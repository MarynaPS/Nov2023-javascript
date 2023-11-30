let arrn=[11, 'qwe', true];
console.log(arrn);

let arr1;
arr1=[11,22, 'qwe', true, [11, 22, 33, 44]];
console.log(arr1[0]);
arr1[0]=100500;
console.log(arr1);
console.log(arr1.length);
console.log(arr1[4]);
 console.log(arr1[4][0]);
 console.log(arr1[4][1]);

let arrElementElement = arr1[4][2];
console.log(arrElementElement);

let music=[
    ['asd', 'qwe', 'azs'],
    ['123', '345', 'true']
];
console.log(music[1][1]);
console.log(typeof []);

//let user_n_age = 31;
//let user_n_name = 'vasta';
//let user_n_status = true;

let user1 = {
    age: 31,
    name: 'vasya',
    status: true,
     skills: [
         {plang: 'html', exp: 1},
         {plang: 'css', exp: 1},
         {plang: 'js', exp: 2}
     ],
      dog: {
         nickname: 'fluffy',
         age: 2,
         breed: 'spaniel'
     }
 };
console.log(user1);
console.log(user1.skills);
console.log(user1.skills[2]);
console.log(user1.dog.age);

console.log(user1['age']);
console.log(user1['skills'][0].plang);

user1.wife = {
     name: 'olya',
     age: 19
 };

console.log(user1);


 let  callToMyFrend = {
     id: 12537123,
     to: '+3890877654542',
     duration: 67
}

user1.skills[user1.skills.length] = {plang: 'java', exp: 1}
console.log(user1);

user1.skills[length] = {plang: 'c#', exp: 1234, status: false}
user1.skills.push({plang: 'nodejs', exp: 12});
console.log(user1);


console.log(typeof []);
console.log(typeof {});
let XXX = [];
console.log(typeof XXX);
console.log(Array.isArray(XXX))

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
     {name: 'max', age: 31, status: true}
];

console.log(users[1]['status']);

let a = 0;
let b = a;
console.log(b);
b = 100500;
console.log(a,b);

let obj1 = {};
let obj2 = obj1; // {}
console.log(obj1, obj2);

obj2.id = 100500;
obj2.name = 'kokos';
console.log(obj2);
console.log(obj1);

//let arr1 = [];
//let arr2 = arr1;

arr2[arr2.length] = 100500;
arr2[arr2.length] = 200600;

console.log(arr1);


let color = prompt('який колір ти бачиш?');
if (color === 'green') {
     console.log('go');
 } else if (color === 'yellow') {
     console.log('wait');
 } else if (color === 'red') {
     console.log('stop');
 } else {
     console.log('call to service');
 }


if (confirm('??????')) {
console.log('11111');
} else {
console.log('22222');
}
//
//
// let color = prompt('який колір ти бачиш?');
// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case  'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//
//     default:
//         console.log('call to service');
// }



let color1 = 'red';
let isRoadClear = 'no';

if (color1 === 'green' && isRoadClear === 'yes') {
    console.log('go');
} else if (color1 === 'yellow' && isRoadClear === 'yes') {
    console.log('wait');
} else if (color1 === 'red' || isRoadClear === 'yes') {
    console.log('stop');
} else {
    console.log('call to service');
}



