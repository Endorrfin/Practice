// 'use strict';


/**
|--------------------------------------------------
  === <<<---  Quiz #1  --->>>  ===
(Q1-1) Что лишнее про Javascript
Интерпретируемый
Мультипародигменный
Строготипизированый +++
Однопоточный
|--------------------------------------------------
*/

/**
|--------------------------------------------------
  === <<<---  Quiz #2  --->>>  ===
  (Q1-2) Что про Javascript правда
Только клиентский
С автоматическим управлением памятью +++
Многопоточный
Компилируемый
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #3  --->>>  ===  
  (Q1-3) В каких сферах нельзя применить Javascript
Во всех можно применить +++ 
Серверная разработка
Микроконтроллеры
Нативные приложения для windows
|--------------------------------------------------
*/





/**
|--------------------------------------------------
  === <<<---  Quiz #4  --->>>  ===
(Q1-4) ECMAscript это
Язык на котором написан javascript
Отдельная версия Javascript
Спецификация языка Javascript +++
Интерпретатор для Javascript
|--------------------------------------------------
*/






/**
|--------------------------------------------------
  === <<<---  Quiz #5  --->>>  ===
  (Q-2-1) Что покажет console.log ?
|--------------------------------------------------
*/

// const func = () => 3;
// const b = '' || 1 || 'there';
// const c = 1 && 2 && func();
// const d = 1 && '' && func();
// console.log(b, c, d); // 1 3 ""

/**
|--------------------------------------------------
  === <<<---  Quiz #6  --->>>  ===

(Q-2-2) Что покажет console.log ? 
|--------------------------------------------------
*/

// const user = { name: "Bill" };
// const func = user => {
//   const currentUser = user || { name: "Bob"};
//   const userName = user && user.name;
//   console.log(currentUser.name, userName); // Bob undefined
// };

// func();

/**
|--------------------------------------------------
  === <<<---  Quiz #7  --->>>  ===

(Q-2-3) Что покажет console.log?
|--------------------------------------------------
*/

// const b = null || "there";
// const c = {} && 0 && 2;
// const d = false && 2 && 'here';
// console.log(b, c, d); // there 0 false



/**
|--------------------------------------------------
  === <<<---  Quiz #8  --->>>  ===
(Q-3-1) Что покажет console.log ?
 window
This is a wrong answer
Error +++
This is a correct answer
2
This is a wrong answer
null
This is a wrong answer
|--------------------------------------------------
*/
// ??????? = undefined

// 'use strict';

// const func = () => {
//   a = 2;
// };
// console.log(window.a); // Error



/**
|--------------------------------------------------
  === <<<---  Quiz #9  --->>>  ===
(Q-3-2) Что покажет console.log ? 
undefined +++
This is a correct answer
window
This is a wrong answer
null
This is a wrong answer
function() { ... }
This is a wrong answer
|--------------------------------------------------
*/
// ??????? = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// 'use strict';

// const func = () => {
//   console.log(this);
// };
// func(); // undefined




/**
|--------------------------------------------------
  === <<<---  Quiz #10  --->>>  ===
(Q-3-3) Что покажет console.log ?
 window
result
undefined +++
null
|--------------------------------------------------
*/

// import module from 'some-module';
// let result = null;
// const func = () => {
//   console.log(this); // undefined
//   result = this;
// };
// func();

// export default result;



/**
|--------------------------------------------------
  === <<<---  Quiz #11  --->>>  ===
(Q-4-1) Что покажет console.log ?
true, false, false
This is a wrong answer
true, true, false
This is a correct answer
false, false, true
This is a wrong answer
true, false, true
This is a wrong answer
|--------------------------------------------------
*/

// const a = false == 0;
// const b = '0' == 0;
// const c = {} == {};

// console.log(a, b, c); // true true false


/**
|--------------------------------------------------
  === <<<---  Quiz #12 --->>>  ===
(Q-4-2) Что покажет console.log ?
true, false, true, true
This is a wrong answer
false, false, true, false
This is a wrong answer
false, false, false, true +++
This is a correct answer
false, true, false, false
This is a wrong answer
|--------------------------------------------------
*/

// ??? false false false false

// const arr = [];
// const arr1 = arr;

// const a = false === 0;
// const b = '0' === 0;
// const c = [] === [];
// const d = arr === arr1;

// console.log(a, b, c, b); // false, false, false, true




/**
|--------------------------------------------------
  === <<<---  Quiz #13 --->>>  ===
(Q-4-3) Что покажет console.log ?
false, false, true,
This is a wrong answer
true, true, false
This is a wrong answer
true, false, false
This is a wrong answer
false, true, false +++
This is a correct answer
|--------------------------------------------------
*/
// ??? SyntaxError

// const func = () => {};
// const func1 = () => {};
// const func2 = func;

// const a = func === func1;
// const b = func2 === func;
// const c = func2 === () => {};

// console.log(a, b, c);



/**
|--------------------------------------------------
  === <<<---  Quiz #14  --->>>  ===
(Q-5-1) Что покажет console.log ?
true, [1,2,3,4], "any123"
This is a wrong answer
"somefalse", "1,2,31", "any123" +++
This is a correct answer
false, [1,2,3,4], "any123"
This is a wrong answer
"somefalse", NaN, "any123"
This is a wrong answer
|--------------------------------------------------
*/

// const a = 'some' + false;
// const b = [1,2,3] + '1';
// const c = 'any' + 123;

// console.log(a, b, c); // somefalse 1,2,31 any123
/**
|--------------------------------------------------
  === <<<---  Quiz #15 --->>>  ===
(Q-5-2) Что покажет console.log ?

"1123", 124, NaN +++
This is a correct answer
"1123", NaN, NaN
This is a wrong answer
"1123", NaN, 125
This is a wrong answer
"1123", 124, 125
This is a wrong answer
|--------------------------------------------------
*/

// const a = 1 + '123';
// const b = 1 + +'123';
// const c = 2 + +'a23ab';

// console.log(a, b, c); // 1123 124 NaN


/**
|--------------------------------------------------
  === <<<---  Quiz #16  --->>>  ===
(Q-5-3) Что покажет console.log ?
true, false, true, true
This is a wrong answer
true, false, false, false
This is a wrong answer
false, true, true, true +++
This is a correct answer
true, true, false, true
This is a wrong answer  
|--------------------------------------------------
*/
// const a = !!'';
// const b = !!-1;
// const c = !![1];
// const d = !![];

// console.log(a, b, c, d); // false true true true



/**
|--------------------------------------------------
  === <<<---  Quiz #17  --->>>  ===
(Q-5-4) Что покажет console.log ?
0, "false", true, true
This is a wrong answer
1, "false", true, true +++
This is a correct answer
NaN, "false", true, true
This is a wrong answer
NaN, 0, true, true
This is a wrong answer
|--------------------------------------------------
*/

// const a = true + false;
// const b = false + '';
// const c = !![1];
// const d = !![];

// console.log(a, b, c, d); // 1 "false" true true


/**
|--------------------------------------------------
  === <<<---  Quiz #18  --->>>  ===
(Q-5-5) Что покажет console.log ?
true, true, true, true
This is a wrong answer
true, false, true, false
This is a wrong answer
false, true, false, true
This is a wrong answer
false, false, false, false +++
This is a correct answer
|--------------------------------------------------
*/

// const a = Boolean(NaN);
// const b = Boolean(null);
// const c = Boolean(undefined);
// const d = Boolean(false);

// console.log(a, b, c, d); // false false false false



/**
|--------------------------------------------------
  === <<<---  Quiz #19  --->>>  ===
(Q-6-1) Что покажет console.log ?
'declaration', 'arrow'
This is a wrong answer
'declaration', null
This is a wrong answer
'declaration', Error +++
This is a correct answer
nul, null
This is a wrong answer
|--------------------------------------------------
*/

// 'use strict';

// console.log( func1()); // dclaration
// console.log( func2()); // Error

// function func1() {
//   return 'dclaration';
// }

// const func2 = () => {
//   return 'arrow';
// }


/**
 |--------------------------------------------------
 === <<<---  Quiz #20  --->>>  ===
 (Q-6-2) Что покажет console.log ?
 'arrow', 'declaration'
This is a wrong answer
'declaration', 'arrow' +++
This is a correct answer
'declaration', null
This is a wrong answer
nul, null
This is a wrong answer
|--------------------------------------------------
*/

// const func2 = () => {
//   return 'arrow';
// }; 

// console.log( func1()); // declaration
// console.log( func2()); // arrow

// function func1() {
//   return 'declaration';
// }

/**
|--------------------------------------------------
  === <<<---  Quiz #21  --->>>  ===
(Q-6-3) Что покажет console.log ?
0
This is a wrong answer
1
This is a wrong answer
2 +++
This is a correct answer
3
This is a wrong answer
|--------------------------------------------------
*/

// const createClicker = () => {
//   let clickCount = 0;

//   return {
//     get() { return clickCount },
//     increase() { clickCount += 1 },
//   }
// };

// const clicker1 = createClicker();

// clicker1.increase();
// clicker1.increase();

// console.log( clicker1.get() ); // 2

/**
|--------------------------------------------------
  === <<<---  Quiz #22  --->>>  ===
  (Q-6-4) Что покажет console.log ?
2,1 +++
This is a correct answer
3,3
This is a wrong answer
1,1
This is a wrong answer
2,null
This is a wrong answer
|--------------------------------------------------
*/

// const createClicker = () => {
//   let clickCount = 0;

//   return {
//     get() { return clickCount },
//     increase() { clickCount += 1 },
//   }
// };

// const clicker1 = createClicker();
// const clicker2 = createClicker();

// clicker1.increase();
// clicker1.increase();

// clicker2.increase();

// console.log( clicker1.get(), clicker2.get()); // 2, 1




/**
|--------------------------------------------------
  === <<<---  Quiz #23  --->>>  ===
  (Q-6-5) Что покажет console.log ?
2,1
This is a wrong answer
3,3 +++
This is a correct answer
1,1
This is a wrong answer
2,null
This is a wrong answer
|--------------------------------------------------
*/

// let clickCount = 0;

// const createClicker = () => {
//   return {
//     get() { return clickCount },
//     increase() { clickCount += 1 },
//   }
// };

// const clicker1 = createClicker();
// const clicker2 = createClicker();

// clicker1.increase();
// clicker1.increase();

// clicker2.increase();

// console.log( clicker1.get(), clicker2.get()); // 3, 3







// EXAMPLES

// === <<<--- What will show console.log? -  --->>>  ===
// var a = {};

// (function b ( a ) {
//     a.a = 10;
//     a = null;
// })( a );

// console.log(a); // {a: 10}

