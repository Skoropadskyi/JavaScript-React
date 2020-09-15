'use strict';

// JSON

// const persone = {
//     name: 'Alex',
//     tel: '+74444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };
//
// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
//
// console.log(persone);
// console.log(clone);



// Promise

// console.log('Запрос данных...');
//
// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('подготовка данных...');
//
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//
//         resolve(product);
//     }, 2000);
// });
//
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Ошибка');
// }).finally(() => {
//     console.log('Finally');
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(1000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(1000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(1000)]).then(() => {
//     console.log('All');
// });



// Filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
//
// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });
//
// console.log(shortNames);

// Map

// const answers = ['IvAn', 'AnnA', 'Hello'];
//
// const result = answers.map(item => item.toLowerCase());
//
// console.log(result);

// every / some

// const some = [4, 'qwer', 'puk'];
//
// console.log(some.some(item => typeof (item) === 'number'));
//
// console.log(some.every(item => typeof (item) === 'number'));

// Reduce

// const arr = [4, 5, 1, 3, 2, 6];
//
// const res = arr.reduce((sum, current) => sum + current);
//
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
//
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
//
// console.log(res);

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// };
//
// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'persone')
//     .map(item => item[0]);
//
// console.log(newArr);


