
// 'use strict';


// *** 2019.11.17 |+|+|+|+|+|+|+|   LESSON #3   |+|+|+|+|+|+|+|


// ======= <<<--- Example 1 --->>>  =======
// var createCar = (initialState) => {

//   var carState = {
//     driver: null,
//     model: null, 
//     fuel: null,
//     ...initialState,
//   };

//   const drive = (driverName) => {
//     carState.driver = driverName;
//   };
//   const enterTheCar = () => {};
//   const changeFuel = () => {};

//   const showCarState = () => ({...carState});
  
//   return {
//     showCarState,
//     drive,
//   };
// };


// ======= <<<--- Closure (замыкание) --->>>  =======

// {
//   function makeCounter () {
//     var currentCount = 1;

//     return function () {
//       return currentCount++;
//     };
//   }

//   var counter = makeCounter();

//   // каждый вызов увеличивает счетчик и возвращает результат
//   console.log( counter()); // 1
//   console.log( counter()); // 2
//   console.log( counter()); // 3
//   console.log( counter()); // 4
//   console.log( counter()); // 5
// }



// ======= <<<--- Closure (замыкание) example II --->>>  =======

//   function counter() {
//     let count = 0;

//     return function() {
//       const nexValue = count + 1;
//       count = nexValue;
//       return nexValue;
//     }
//   }

//   var b = counter();
//   var c = counter();
  
//   // каждый вызов увеличивает счетчик на 1, b и c живут своей жизнью и не пересекаются
// console.log(b()); // 1
// console.log(b()); // 2
// console.log(b()); // 3
// console.log(b()); // 4

// console.log(c()); // 1
// console.log(c()); // 2
// console.log(c()); // 3

// console.log(b()); // 5
// console.log(c()); // 4




// ================= Lexical environment example 1
// var a = 10;

// function abc(){
//   var a = 7;

//     function getA() {
//         console.log(a);
//     }

//   window.getA = getA;
// }

// abc();
// window.getA()


// ================= Lexical environment example 2
// var a = 10;

// function getA() {
//   console.log(a);
// }


// function abc(){
//   var a = 7;

//   getA();
// }

// abc();