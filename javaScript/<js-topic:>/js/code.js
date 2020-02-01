 // Создание переменных


// let num1 = 42;
// console.log(num1);

// let num = 5;
// if (true) {
//     let num = 10;
// }
// console.log(num);

// const arr = [1, 2, 3, 5, 8];
// arr.push(13);
// console.log(arr);





                        // Стрелочная функция

// let sum = (a, b) => {
//     return a + b
// }
// console.log(sum(5, 5));

// let cube = a => {
//     return a ** 3;
// }
// console.log(cube(3));

// let square = a => a ** 2
// console.log(square(2));

// setTimeout(() => console.log('1 sec'), 1000);

// let lord = firstName => `${firstName}`
// console.log(lord('Dale'));

// let ify = land => `${land}`
// console.log(ify('Zanzibar'));

// let lordify = (firstName, land) => `${firstName} of ${land}`
// console.log(lordify('Dale', 'Zanzibar'));

// let nameAge = (name, age) => `${name} ${age}`
// console.log(nameAge('Murad', 25));

// let ageName = (age, name) => {
//     if (!age) {
//         throw new Error('ERRROOOORRRRR');
//     } 
//     if(!name) {
//         throw new Error('errroooorrrrr');
//     }
//     return `${age} ${name}`
// }
// console.log(ageName(25, "Murad"));






                        // Параметры по умолчанию

// function compute(a, b = 20) {
//     return a + b
// }
// console.log(compute(10));





                        // Строки

// const title = 'Heeeeey';
// const template = `<h1>${title}</h1>`
// console.log(template);






                        // Rest

// function average(...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
// }
// console.log(average(10, 20, 30, 40, 50));

// let log = function(a, b, ...rest) {
//    console.log(a, b, rest); 
// }
// log('Basic', 'rest', 'operator', 'usage', 'user', 'admin');

// let log = function(a, ...args) {
//     console.log(a, args);
// }
// log(1, 2, 3, 4, 5);
 




                        // Промисы

// const promise = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve('Success');
//     }, 1000)
// });

// promise.then(data => console.log(data));

// const delay = ms => new Promise (((resolve, reject) => {
//     setTimeout(() => resolve(`Done! ${ms}`), ms)
// }))

// delay('Err')
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Выполнено !'))

// async function asyncDelay() {
//     try {
//         const data = await delay(2000)
//         console.log(data)
//     } catch (e) {
//         console.log('Error')
//     }
// }
// asyncDelay();

// Promise.all ([
//     delay(1000),
//     delay(500),
//     delay(2000)
// ]).then(data => console.log(data))

// Promise.race ([
//     delay(1000),
//     delay(500),
//     delay(2000)
// ]).then(data => console.log(data))


console.log('hi');
console.log('world');






































