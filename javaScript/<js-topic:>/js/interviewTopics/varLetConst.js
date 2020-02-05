// source: https://dev.to/ahmetkapusuz/what-is-the-temporal-dead-zone-in-javascript-3hlc

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
let foo = 'first';
function example() {
  console.log(foo); // ReferenceError
  let foo = 'second';
}
example();



// === EXAMPLE 06.