// 'use strict';

  // === <<<---  What will show console log? #1 --->>>  ===  

// console.log(1 + '2'); // 12
// console.log('1' + 2); // 12
// console.log(1 + 3 + '2'); // 42
// console.log([] + []); // ' '
// console.log([] + {}); // [object Object]
// console.log({} + []); // [object Object]
// console.log({} + {}); // [object Object][object Object]
// console.log('5' - 3); // 2
// console.log('5' + 3); // '53'
// console.log('5' - '4'); // 1
// console.log('5' + +'5'); // 55
// console.log(5 + +'5'); // 10
// console.log('foo' + 'foo'); // foofoo
// console.log('foo' + +'foo'); // fooNaN
// console.log('5' + -2); // '5-2'
// console.log(null == undefined) // true

// console.log(undefined === undefined) // true
// console.log(null === null) // true

// console.log(NaN == undefined) // false
// console.log(NaN == null) // false

// console.log(NaN === NaN) // false
// console.log(NaN == NaN) // false

// console.log(typeof typeof 1); // string




// var a={},
//   b={key:'b'},
//   c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);

// console.log({}.toString())


  // === <<<--- What will be the output of this code? --->>>  ===  
// var x = 21;
// var girl = function () {
//   console.log(x);
//   var x = 20;
// };
// girl ();


  // === <<<--- Imagine you have this code: --->>>  ===  
// var a = [1, 2, 3];
// // a) Will this result in a crash?
// a[10] = 99;
// // b) What will this output?
// console.log(a[6]);



  // === <<<--- Чему равно foo.length? --->>>  ===  
// var foo = {};
// foo.bar = 'hello';
// console.log(foo.length)


  // === <<<--- What will show console log? --->>>  ===  
// var RED = 'red';
// const red = 'red';
// var RED = 'blue';
// red = 'blue';
// console.log(RED);




  // === <<<--- What will show console log? --->>>  ===  
// var a = {};
// var b = a;
// console.log(a === b);  // true

// var c = {};
// var d = {};
// console.log(c === d); // false - передача по сслыке, а ссылки разные




  // === <<<--- What will show console log? --->>>  === 
// let num = 5;

// function run(fromWhom, fromWhom) {
//   return fromWhom
// }
// console.log( run(1, 2) );
// console.log( num );
// console.log( zombie );

// // 13.
// for (let i = 0; i < 10; i++) {
//   let count = 10;
//   count += i
// }

// console.log(count)