"use strict";

// const personalMovieDB = {
//     count:0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
//         while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов', ''),
//                 b = prompt('На сколько оцените его', '');
//
//             if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//
//             if (genre === '' || genre === null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };



// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName === '#text') {
//         continue;
//     }
//
//     console.log(node);
// }



// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');
//
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//
//         console.log('Start');
//         console.log(e.targetTouches);
//     });
//
//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//
//         console.log('Move');
//     });
//
//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();
//
//         console.log('End');
//     });
// });

// touches
// targetTouches
// changedTouches


//Работа с датами
// const now = new Date();
//
// console.log(now.setHours(40));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();
//
// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }
//
// let end = new Date();
//
// alert(`Цикл отработал за ${end - start} миллисекунд`);


//Функции-консткрукторы
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
//
// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} ушел`);
// };
//
// const oleg = new User('Oleg', 26);
// const alex = new User('Alex', 20);
//
// oleg.exit();
//
// oleg.hello();
// alex.hello();
//
// console.log(oleg);
// console.log(alex);



//This

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//
//     console.log(sum())
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     }
// }
// let oleg = new User('Oleg', 26);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//     name: 'John '
// };
//
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
//
// function count(num) {
//     return this * num;
// }
//
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(31));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контексту методов обьекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');
//
// btn.addEventListener('click',  (e) => {
//     e.target.style.backgroundColor = 'red';
// });
//
// const obj = {
//   num: 5,
//   sayNumber: function () {
//       const say = () => {
//           console.log(this);
//       };
//
//       say();
//   }
// };
// obj.sayNumber();
//
// const double = (a, b) => a * 2;
//
// console.log(double(4))



//Классы (ES6)

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//
//     calcArea() {
//         return this.height * this.width;
//     }
// }
//
// class ColorRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//
//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }
//
// const div = new ColorRectangleWithText(25, 10, 'Hello World!', 'red');
//
// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
//
// console.log(long.calcArea());
// console.log(square.calcArea());



// Rest

// const log = function (a, b, ...rest) {
//     console.log(a, b, rest);
// }
//
// log('basic', 'rest', 'operator', 'usage');
//
// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }
//
// calcOrDouble(3);


