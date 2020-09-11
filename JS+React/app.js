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
