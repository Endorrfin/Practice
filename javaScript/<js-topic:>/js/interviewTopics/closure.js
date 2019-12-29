// 'use strict';

/**
|--------------------------------------------------
  === <<<--- CLOSURe--->>>  ===
  https://www.youtube.com/watch?v=BIHziPMbaJw&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=5

  Что такое замыкание? 
  Замыкание - это одно из ключевых понятий всей функциональной парадигмы програмирования.

  К примеру объектно ориентированная парадигма программирования держиться на 3-х китах: полиморфизме, наследовании и инкапсуляции, иногда еще выделяют 4-го кита абстракцию.

  Функциональной парадигма програмирования, которую реализует JS тоже держиться на 3-х китах: замыкании, каррировании и мемоизации.

  ЗАМЫКАНИЕ - это функция, которая ссылается на переменные объявленные вне данной функции.

|--------------------------------------------------
*/


// // === <<<--- EXAMPLE I --->>>  ===

// function makeGreeting () {
//   var myName = "Alex";

//   function greeting(personName) {
//     return "Hello, " + personName + "! My name's " + myName + ".";
//   };

//   return greeting;
// }

// // Сохраняем созданное замыкание в переменную.
// var newGreeting = makeGreeting();

// /* 
// вызываем функцию greeting из замыкания, передавая туда необходимые параметры.
// Ключевым моментом является то, что функция makeGreeting уже отработала, и фактически переменной myName уже не существует, но благодаря тому, что мы создали замыкание (упомянули) эту переменную в какой-то из вложенных функций, ее значение сохранилось.
// Фактически, в переменной newGreeting содержитья не только ссылка на саму функцию greeting, но и некий словарь, содержащий значение всех переменных объявленных на момент их создания. Это позволяет нам при вызове функции newGreeting использовать значение не сущетствующей уже переменной myName при построении строки вывода.
// */
// console.log(newGreeting("Bill")); // Hello, Bill! My name's Alex.
// console.log(newGreeting("Fredorika")); // Hello, Fredorika! My name's Alex.
// console.log(newGreeting("Skot")); // Hello, Skot! My name's Alex.

// /* 
// Принципиальная разница между функциями makeGreeting & greeting не только то, что greeting вложенная в makeGreeting, но прежде всего то, что greeting использует переменную, которая не объявлена в этой функции и не является ее параметром - в данном случае переменная myName.
// Таким образом функция greeting в отличии от makeGreeting будет являтся замыканием.
// */



// /* 
// Самое распространенное применение это, наверное, приватные свойства и методы для классов. В JS нету модификаторов доступа к членам класса, но инкапсуляция кода иногда требуется. Еще замыкание полезно в callback-функциях. Внутри callback-функции мы имеем доступ ко всем переменным содержащей (где callback объявлялся) функции.
// Самая распространенная ошибка это создание замыканий в цикле, на каждой итерации цикла старое замыкание будет затираться новым. Это одна из причин, почему в JS добавили модификатор let.
// */





// *** 2019.11.28 |+|+|+|+|+|+|+|   Closure #8   |+|+|+|+|+|+|+|
// Замыкание (closure) - это функция и все переменные, которые ей доступны снаружи.

// var messenger = function (firstName, secondName) {
//   var count = 0;
//   var greetingMessage = "Welcome " + firstName + " " + secondName + ".Glad to see you ";

//   return {
//     sayHello : function () {
//       console.log(greetingMessage + (count++));
//     },
//     resetCount : function () {
//       count = 0;
//       console.log("Count is 0");
//     }
//   }
// }

// var person1 = messenger("John", "Connor");
// person1.sayHello();
// person1.sayHello();
// person1.sayHello();
// person1.resetCount();
// person1.sayHello();


// var person2 = messenger("Anakin", "Skywalker");
// person2.sayHello();
// person2.sayHello();
// person2.sayHello();



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





/**
|--------------------------------------------------
  === <<<---  CLOSURE --->>>  ===
|--------------------------------------------------
*/

// function checkCred () {
//   const login = 'test';
//   const password = 'somePassword';

//   return {
//     checkLogin (value) {
//       return login === value;
//     },

//     checkPassoword (value) {
//       return password === value;
//     },
//   };
// }

// const check = checkCred();

// console.log(check); // {checkLogin: ƒ, checkPassoword: ƒ}
// console.log(check.checkLogin('admin')); // fasle
// console.log(check.checkLogin('test')); // fasle

// console.log(check.checkPassoword('qwerty')); // false
// console.log(check.checkPassoword('somePassword')); // true




/**
|--------------------------------------------------
  === <<<---  CLOSURE --->>>  ===
|--------------------------------------------------
*/

// // EXAMPLE with let

// function closureLet () {
//   const arrOfFunction = [];
//   let value = '';

//   for (let i = 0; i < 10; i++) {
//     value += i;
//     arrOfFunction.push(function() {
//       console.log(value, i); // closure
//     });
//   }
//   // console.log(arrOfFunction); // (10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
//   return arrOfFunction;
// }

// const resLet = closureLet();
// resLet[0](); // 0123456789 0
// resLet[5](); // 0123456789 5
// resLet[9](); // 0123456789 9



// // EXAMPLE with var

// function closureVar () {
//   const arrOfFunction = [];
//   let value = '';

//   for (var i = 0; i < 10; i++) {
//     value += i;
//     arrOfFunction.push(function() {
//       console.log(value, i); // closure
//     });
//   }
//   // console.log(arrOfFunction); // (10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
//   return arrOfFunction;
// }

// const resVar = closureVar();
// resVar[0](); // 0123456789 10
// resVar[5](); // 0123456789 10
// resVar[9](); // 0123456789 10


