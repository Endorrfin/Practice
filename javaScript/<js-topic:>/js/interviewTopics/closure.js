// 'use strict';

/**
|--------------------------------------------------
  === <<<--- CLOSURe--->>>  ===
  https://www.youtube.com/watch?v=BIHziPMbaJw&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=5

  Что такое замыкание? 
  Замыкание - это одно из ключевых понятий всей функциональной парадигмы програмирования.

  К примеру объектно ориентированная парадигма программирования держиться на 3-х китах: полиморфизме, наследовании и инкапсуляции, иногда еще выделяют 4-го кита абстракцию.

  Функциональная парадигма програмирования, которую реализует JS тоже держиться на 3-х китах: замыкании, каррировании и мемоизации.

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



/* 
вызываем функцию greeting из замыкания, передавая туда необходимые параметры.

Ключевым моментом является то, что функция makeGreeting уже отработала, и фактически переменной myName уже не существует, но благодаря тому, что мы создали замыкание (упомянули) эту переменную в какой-то из вложенных функций, ее значение сохранилось.

Фактически, в переменной newGreeting содержитья не только ссылка на саму функцию greeting, но и некий словарь, содержащий значение всех переменных объявленных на момент их создания. Это позволяет нам при вызове функции newGreeting использовать значение не существующей уже переменной myName при построении строки вывода.
*/

// console.log(newGreeting("Bill")); // Hello, Bill! My name's Alex.
// console.log(newGreeting("Fredorika")); // Hello, Fredorika! My name's Alex.
// console.log(newGreeting("Skot")); // Hello, Skot! My name's Alex.


/**
 * Принципиальная разница между функциями makeGreeting & greeting не только то, что greeting вложенная в makeGreeting, но прежде всего то, что greeting использует переменную, которая не объявлена в этой функции и не является ее параметром - в данном случае переменная myName.
 * Таким образом функция greeting в отличии от makeGreeting будет являтся замыканием.
 */



// /* 
// Самое распространенное применение это, наверное, приватные свойства и методы для классов. В JS нет модификаторов доступа к членам класса, но инкапсуляция кода иногда требуется. Еще замыкание полезно в callback-функциях. Внутри callback-функции мы имеем доступ ко всем переменным содержащей (где callback объявлялся) функции.
// Самая распространенная ошибка это создание замыканий в цикле, на каждой итерации цикла старое замыкание будет затираться новым. Это одна из причин, почему в JS добавили модификатор let.
// */





// *** 2019.11.28 |+|+|+|+|+|+|+|   Closure #8   |+|+|+|+|+|+|+|
// Замыкание (closure) - это функция и все переменные, которые ей доступны снаружи.

var messenger = function (firstName, secondName) {
  var count = 0;
  var greetingMessage = "Welcome " + firstName + " " + secondName + ".Glad to see you ";

  return {
    sayHello: function () {
      console.log(greetingMessage + (count++));
    },
    resetCount: function () {
      count = 0;
      console.log("Count is 0");
    }
  }
}

// var person1 = messenger("John", "Connor");
// person1.sayHello();
// person1.sayHello();
// person1.sayHello();
// person1.resetCount();
// person1.sayHello();
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




/**
|--------------------------------------------------
  === <<<---  TASK CLOSURE --->>>  ===
Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0 - если число не передано, то оно равно 0
Подсказка, функция minus должна возвращать другую функцию.
|--------------------------------------------------
*/

// function minus (num1 = 0) {
//   // console.log(num1);

//   return function (num2 = 0) {
//     // console.log(num2);
//     return num1 - num2;
//   }
// }

// // minus(1)(2); // вызываем 1-ю функцию (1) и сразу 2-ю функцию (2)
// console.log(minus(5)(3));
// console.log(minus(10)(2));
// console.log(minus(7)(8));
// console.log(minus(100)(178));
// console.log(minus(1000)(1));
// console.log(minus()(3));


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
Функция должна запоминать результат предыдущего multiply и умножать на следующее значение, которое передается.
|--------------------------------------------------
*/

// function multiplyMaker(num1) {
//   // console.log(num1);
//   return function (num2) {
//     // console.log(num2);
//     return num1 *= num2;
//   }
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(1));
// console.log(multiply(2));
// console.log(multiply(4));
// console.log(multiply(1));
// console.log(multiply(6));


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Реализовать модуль, который работает со строкой и имеет методы:
  a. установить строку
    i. если передано пустое значение, то установить пустую строку
    ii. если передано число, число привести к строке
  b. получить строку
  c. получить длину строки
  d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5

|--------------------------------------------------
*/

// const module = (function () {
//   let str = '';

//   function setString(str = "") {
//     str = String(value); // приводим любое значение к строке.
//     return str;
//   }

//   function getString() {
//     return str;
//   }

//   function getStringlength() {
//     return str.length;
//   }

//   function reversString() {
//     return str
//       .split('')
//       .reverse()
//       .join('');
//   }

//   return {
//     setString,
//     getString,
//     getStringlength,
//     reversString
//   };
// }) ();


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
  course - Современный JavaScript с нуля на реальных проектах
Замыкание - это функция, которая ссылается на свободные переменные.
Свободные переменные - это переменные, которые не были переданы этой функции, как параметры и не были объявлены внутри этой фукнции, как локальные переменные.

Другими словами - функция определенная в замыкании запоминает то окружение, в котором она была создана и имеет к нему доступ, а также она имеет доступ к окружению выше и может получать различные переменные из родительских окружений.
|--------------------------------------------------
*/

// OPTION I
// function getFullName (firstName, lastName) {
//   console.log(firstName, lastName);
//   return function () {
//     return `${firstName}, ${lastName}`;
//   };
// }

// const getName = getFullName('Steve', 'Jobs');
// console.log(getName); // str function
// console.log(getName('Larry', 'King')); // Steve Jobs



// OPTION II
// function updateValue (value = 0) {
//   let x = value;
//   return function (number = 0) {
//     return (x += number);
//   };
// }

// const updateData = updateValue(2);
// const updateInformation = updateValue(3);
// console.log(updateData(1)); // 3
// console.log(updateInformation(1)); // 4
// console.log(updateData(2)); // 5
// console.log(updateInformation(3)); // 7




// OPTION III

// function checkCredit () {
//   const login = someLogin;
//   const password = somePassword;

//   return {
//     checkLogin(value) {
//       return login === value;
//     },
//     checkPassword(value) {
//       return password === value;
//     },
//   };
// }


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
  source - https://www.youtube.com/watch?v=E0fzm2BaHiY&list=PLF5GvE7BxzVFnRaev8rNPCs4WB6eSGlHT&index=2
Стоит коробка с 6 игрушками.
Есть дети. Детей больше, чем игрушек.
К коробке походят дети по очереди и забирают по 1 игрушке.
Выбрав 1 игрушку, мы должны получить имя данной игрушки.
Когда подходит очередной ребенок и не обнаруживает в коробке игрушки, он начинает плакать.
Реализовать это с помощью функций и замыкания.
|--------------------------------------------------
*/

// function saveBoxOfToys() {
//   var toysIntoBox = ['Кошка', 'Собачка', 'Лев', 'Слон','Панда','Орел'];

//   function getToy() {
//     var max = toysIntoBox.length;
//     var min = 0;
//     var randomToys = Math.floor(Math.random() * (max - min) + min);
//     console.log(randomToys)
//     var toyName = toysIntoBox.splice(randomToys, 1);

//     if(toyName == 0) {
//       return 'хмык, хмык'
//     } else {
//       return toyName;
//     }
//   }

//   return getToy;
// }

// var saveToys = saveBoxOfToys();
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());






/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Дан ящик с новогодними игрушками, к нему подходят дети по одному.
Каждый берет из ящика игрушку.
Надо получить название игрушки.
Когда закончаться игрушки, то ребенок, которому уже не досталось игрушки должен заплакать.

Появляется дед Мороз и добавляет в ящик игрушки.
Написать код с помощью функций и замыкания?

Подсказки
Функция не может возвращать 2 return, но нам нужно вернуть 2 вещи.
Можно return вернуть массив функций.
|--------------------------------------------------
*/

// function saveBoxOfToys() {
//   var boxOfToys = ['cat', 'dog', 'leon', 'elephan', 'horse', 'pinguin'];

//   function putToys() {
//     for (var i = 0; i < arguments.length; i++) {
//       boxOfToys.push(arguments[i]);
//     }
//   }

//   function getToy() {
//     var max = boxOfToys.length;
//     var min = 0;
//     var randomToy = Math.floor(Math.random() * (max - min) + min);
//     var toyName = boxOfToys[randomToy];
//     boxOfToys.splice(randomToy, 1);
//     if (toyName !== undefined) {
//       return toyName;
//     } else {
//       return 'A-a-a-a-a';
//     }
//   }

//   return [getToy, putToys];
// }

//   var callFunction = saveBoxOfToys();
//   var callFunctionGetToy = callFunction[0];
//   var callFunctionPutToys = callFunction[1];

// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
  
// callFunctionPutToys('moon', 'star');

// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());

// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());

  



  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */



  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */



  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */




  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */




  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */



  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */



  /**
  |--------------------------------------------------
    === <<<---  TASK  --->>>  ===

  |--------------------------------------------------
  */