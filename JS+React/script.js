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
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};

const oleg = new User('Oleg', 26);
const alex = new User('Alex', 20);

oleg.exit();

oleg.hello();
alex.hello();

console.log(oleg);
console.log(alex);
