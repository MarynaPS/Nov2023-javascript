//Масиви та об'єкти:
//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr= [ 11, 22, 33, 'qwe', 'ASD', true, false,  [1, 2, 3, 4], {}, 100];
console.log(arr);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let  book1 = {
    title: 'love and stuff',
    pageCount: 100,
    genre: 'novel',
};
let  book2 = {
    title: 'Sherlock Holmes',
    pageCount: 150,
    genre: 'detective',
};

let  book3 = {
    title: 'Golden age',
    pageCount: 80,
    genre: 'story',
};
console.log(book1);
console.log(book2);
console.log(book3);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

book1.authors = {
    name: 'Jonsan',
    age:30
};
console.log(book1);

book2.authors = {
    name: 'Michelle',
    age:35
};
console.log(book2);

book1.authors = {
    name: 'Leonard',
    age:43
};
console.log(book3);

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Maryna', username:'Mar12', password:'123q'},
    {name: 'Petya', username: 'petya', password:'456w'},
    {name: 'Olya', username:'olya88', password:'234e' },
    {name: 'Michel', username:'michel',password: 'er456'},
    {name: 'Jon', username: 'jon21', password: '234r'},
    {name: 'Anna', username: 'AnnaH', password: '456t'},
    {name: 'Max', username: 'Max0', password: 'df34'},
    {name: 'Andrey', username: 'andrey', password: '12sd'},
    {name: 'Mila', username: 'Mila31', password: '34r5'},
    {name: 'Serg', username: 'serg', password: 'ert5'},
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

//Логічні розгалуження
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=10;
if (x>0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let a=-3;
if (a>0){
    console.log('Вірно');
}else if (a<=0){
    console.log('Невірно')
} else{
    console.log('Невірно');
}

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time=60;
if (time<14){
    console.log('перша частина години');
}else if (time<29){
    console.log('друга частина години')
} else if (time<44){
    console.log('третя частина години')
}else if (time<59){
    console.log('четверта частина години')
} else {
    console.log('Значення невірно');
}

//У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=31;
if (day<9){
    console.log('перша декада місяця');
}else if (day<19){
    console.log('друга декада місяця')
} else if (day<32){
    console.log('третя декада місяця')
} else {
    console.log('Значення невірно');
}

//Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let table =10;
switch (table){
    case 1:
        console.log('Monday');
        break;
    case  2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('your task schedule is completed');
}


//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num_a = -3;
let num_b = -3;

if (num_a>num_b) {
    console.log(num_a);
} else if (num_b>num_a) {
    console.log(num_b);
} else if (num_a===num_b) {
    console.log('a and b are equal');
} else {
    console.log('call to service');
}

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xx='hello';
xx=xx || 'default'
console.log(xx);

//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >=5)
    console.log("Super");
if (coursesAndDurationArray[1].monthDuration >=5)
    console.log("Super");
if (coursesAndDurationArray[2].monthDuration >=5)
    console.log("Super");
if (coursesAndDurationArray[3].monthDuration >=5)
    console.log("Super");
if (coursesAndDurationArray[4].monthDuration >=5)
    console.log("Super")
if (coursesAndDurationArray[5].monthDuration >=5)
    console.log("Super");

