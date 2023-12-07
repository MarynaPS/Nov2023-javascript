let a=0;
a=a+1;
console.log(a);

a++
console.log(a);

++a;
console.log(a);

a+=1;
console.log(a);

for (let i =0; i<10; i++){
    console.log('i')
}

let users = [
     {skills: ['html', 'js', 'java'], name: 'vasya', age: 31, status: false},
     {skills: ['html', 'js', 'C#'], name: 'petya', age: 30, status: true},
     {skills: ['html', 'js'], name: 'kolya', age: 29, status: true},
     {skills: ['html', 'js', 'node'], name: 'olya', age: 28, status: false},
     {skills: ['html', 'js'], name: 'max', age: 30, status: true},
     {skills: ['html', 'js', 'react'], name: 'anya', age: 31, status: false},
     {skills: ['html', 'js', 'react', 'node'], name: 'oleg', age: 28, status: false},
     {skills: ['html', 'js', 'react', 'node'], name: 'andrey', age: 29, status: true},
     {skills: ['html', 'js', 'react', 'node'], name: 'masha', age: 30, status: true},
     {skills: ['html', 'js', 'react', 'node'], name: 'olya', age: 31, status: false},
     {skills: ['html', 'js', 'react', 'node'], name: 'max', age: 31, status: true}
 ];

for (let i=0; i<users.length; i++){
    console.log(users[i]);
}

for(let i=0; i<users.length; i++){
    const user= users[i];
    if (user.status===true){
        console.log(user);
    }
}


//for (const u of users){
//    console.log(u);



for (const user of users){
    if (user.age>29){
        console.log(user);
    }
}

const x=[];
x[0]='qwe';
console.log(x);

//for (const user of users) {
//    let skills =user.skills
//    for (let i=0; i<skills.length; i++){
//        const skill=skills[i];
//        console.log(skill);
//    }
//    console.log("________________")
//}



for (const user of users) {

     let skills = user.skills;
     for (const skill of skills) {
         console.log(skill);
    }
     console.log('-----------');
}


for (let min=0; min<2; min++){
    for (let sec=0; sec<60; sec++){
        console.log(min, sec);
    }
}

let car = {
     id: 1,
     model: 'subaru',
     power: 234,
     status: true,
     parts: [111, 222, 333]
 };

 console.log(car['id']);
 console.log(car['model']);

for (const carKey in car) {
    console.log(carKey, car[carKey]);
}

let users2 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true,qwe:'kjsghsjgfdsj'},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true,asd:'qwe'},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<ul>');
for (const user of users2) {
     document.write(`<li>`);

     for (const userKey in user) {
         document.write(`${userKey} - ${user[userKey]} `);
     }
     document.write(`</li>`);
 }
document.write('</ul>');

let i = 0;
while (i < users.length) {
    console.log(users[i]);
    i++;
}

do {
    console.log('asdjasgdh');
} while (false)