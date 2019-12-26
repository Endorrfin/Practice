
// 'use strict'; 


// *** 2019.11.24 |+|+|+|+|+|+|+|   LESSON #1   |+|+|+|+|+|+|+|

// ======= <<<--- Example --->>>  =======
// var a = {
//   c: 2
// }

// function fanc (a) {

//   a.b = 2; // передача по ссылке
//   console.log('First: ', a); // {c: 2, b: 2}

//   a = null; // просто переменная внутри функции
//   console.log('Second: ', a); // null
// }

// fanc(a);

// console.log('Last: ', a); // {c: 2, b: 2}








// ======= <<<--- Example --->>>  =======
// function CarFactory(){
//   console.log(this);
    
//   var arrowAnalog = (function(){ console.log(this)}).bind(this);

//   var arrowFunc = () => { console.log(this) };

// }

// new CarFactory();



// ======= <<<--- Example --->>>  =======
// let dogCount = 2
// let catCount = 3

// function showCount() {
// 	let dogCount = 200;
// 	catCount = 300;

// 	if (true) {
// 		let dogCount = 2000;
// 		console.log('if: ', dogCount);
// 	}

// 	console.log('showCoutn: ', dogCount);
// }

// (() => {
// 	let dogCount = 20;
// 	let catCount = 30;
// 	showCount()
// })();

// console.log('global:', catCount, dogCount);




// ======= <<<--- this - контекст выполнения --->>>  =======

// function f1() {
//   return this;
// }

// // ??????? = undefined
// console.log(f1()); // Window ???




// ======= <<<--- this - контекст выполнения --->>>  =======
// 'use strict';
/**
|--------------------------------------------------
| 'use strict' - появился в ES5
| выключает поддержку некоторых старых стандартов!
|
| 'use strict отключает некоторые штуки
| 1. глобальное this
| 2. мы не можем испльзовать любую переменную, если она не объявлена
|--------------------------------------------------
*/

// function f1() {
//   return this;
// }

// console.log(f1()); // undefined




// ======= <<<--- this - контекст выполнения --->>>  =======

// const o = {
//   prop: 37,
//   func: function() {
//     return this;
//   }
// };
// console.log(o.func()); // Object o - {prop: 37, func: ƒ}

// const b = {
//   b: 2,
//   func: o.func
// };
// console.log(b.func()); // Object b - {b: 2, func: ƒ}


// const node = document.querySelector('div');
// node.addEventListener('click', o.func);

// node.click();
// // dom element