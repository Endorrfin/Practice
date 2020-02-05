// source: https://dev.to/ahmetkapusuz/what-is-the-temporal-dead-zone-in-javascript-3hlc
// https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6/31222689#31222689

// === EXAMPLE 01.
// var foo = 'foo';
// console.log(foo); // foo


// === EXAMPLE 02.
// console.log(foo); // undefined
// var foo = 'foo';


// === EXAMPLE 03. 
// console.log(foo); // // ReferenceError
// let foo = 'foo';


// === EXAMPLE 04. 
// var foo = 'first';
// function example() {
//   console.log(foo); // undefined
//   var foo = 'second';
// }
// example();


// === EXAMPLE 05. 
// let foo = 'first';
// function example() {
//   console.log(foo); // ReferenceError
//   let foo = 'second';
// }
// example();



// === EXAMPLE 06.