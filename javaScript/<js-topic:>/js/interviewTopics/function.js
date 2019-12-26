// 'use strict';


// |+|+|+| === SECTION #1 ===  |+|+|+| 

/**
|--------------------------------------------------
| Написать функцию, которая будет складывать 2 числа?
| Но надо стремиться к тому, чтоб код был универсальный и функция суммировала любое количество чисел
| source - https://www.youtube.com/watch?v=UHhQ74uwCns
|--------------------------------------------------
*/

// === OPTION I ===
// function sum1(a, b, c, d) {
//   c = c || 0;
//   d = d || 0;
//   return a + b + c + d;
// }

// console.log(sum1(3, 4)); // 7
// console.log(sum1(3, 4, 5)); // 7
// console.log(sum1(3, 4, 5, 6)); // 7


// === === === === === === === 

// === OPTION II ===

// function sum() {
//   let result = 0;
//   let elements = Array.from(arguments);
//   for(let i = elements.length - 1; i >= 0; i--) {
//     result += elements[i];
//   }
//   return result;
// }

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));


// === OPTION III ===

// // релизация еще одной функции для обработки неккорекных данных пользователем
// function clean(elements) {
//   return elements.filter((el) => !isNaN(Number(el)))
// }


// function verify(elements) {
//   elements.forEach((el) => {if (isNaN(Number(el))) throw new Error("Not a number")})
//   return elements;
// }


// function sumNumber() {
//   // return Array.from(arguments).reduce((a, b) => a + b, 0)
//   return verify(Array.from(arguments)).reduce((a, b) => Number(a) + Number(b), 0);
// }

// // Spesification
// console.log(sumNumber());
// console.log(sumNumber(1));
// console.log(sumNumber(1, 2));
// console.log(sumNumber(1, 2, 3));
// console.log(sumNumber(1, 2, 3, 4));
// console.log(sumNumber(1, 2, 3, 4, 5));

// // Gigo
// console.log(sumNumber('5', '7'));
// console.log(sumNumber('as', '5'));
// console.log(sumNumber([], {}, '2', 4)); // 6
// console.log(sumNumber([3], {}, '2', 4)); // 9









/**
|--------------------------------------------------
| some functions
| source - https://www.youtube.com/watch?v=8cV4ZvHXQL4
|--------------------------------------------------
*/

// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n, n);
// }

// function printSquare(n) {
//   var squared = square(n);
//   console.log(squared);
// }

// printSquare(8); // 64



// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#1   |+|+|+|+|+|+|+|

// var msg = 'Welcome ';
// function first(msg) {
//   var secondMsg = "message";

//   function second(msg) {
//     console.log( msg );
//     console.log( secondMsg );
//   }
//   second(msg);
// }
// first("text");



// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#2   |+|+|+|+|+|+|+|

// var msg = 'Welcome ';
// function first(msg) {
//   var secondMsg = "message";

//   function second(msg) {
//     var msg = "Internal Msg";
//     console.log( msg );
//     console.log( secondMsg );
//   }
//   second(msg);
// }
// first("text");




// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#3   |+|+|+|+|+|+|+|

// var msg = 'Welcome ';
// function first(msg) {

//   var secondMsg = "message";
//   var msg = "MiddleMsg";

//   function second(msg) {
//     console.log( msg );
//     console.log( secondMsg );
//   }
//   second(msg);
// }
// first("text");


// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#4   |+|+|+|+|+|+|+|

// var msg = 'Welcome ';
// function first() {

//   var secondMsg = "message";

//   function second() {
//     console.log( msg );
//     console.log( secondMsg );
//   }
//   second();
// }
// first("text");


// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#5   |+|+|+|+|+|+|+|

// function first(test2) {
// var test1 = "test1";
// return test1 + test2;

// }

// function second() {
//   var test2 = " test2";
//   var test3 = first(test2);
//   console.log(test3);
// }
// second();



// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#6   |+|+|+|+|+|+|+|

// function first() {
//   var test1 = "test1";
//   return test1
//   }
  
//   function second() {
//     var test2 = " test2";
//     return test2;
//   }

//   function third() {
//     var test3 = first() + second();
//     console.log(test3);
//   }

//   third();



// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#7   |+|+|+|+|+|+|+|

// var msg = 'Welcome ';
// function first(msg) {

//   var secondMsg = "message";

//   function second(msg) {
//     msg = "Internal Msg";
//     console.log( msg );
//     // console.log( secondMsg );
//   }
//   second(msg);
//   console.log( msg );
// }
// first("text");




// 5. Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?
// function greet(person) {
//   if (person == { name: 'amy' }) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// console.log( greet({ name: 'amy' }) )