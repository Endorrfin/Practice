// 'use strict';

/**
|--------------------------------------------------
  === <<<--- THIS --->>>  ===
  https://www.youtube.com/watch?v=qZDjK5BqLbM&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=3
  Как работает ключевое слово this?  

  В большинстве языков программирования, по крайней мере С-подобных языков, есь ключевое слово this и оно ссылается н текущий объект. Тоесть на объект, которому принадлежит метод, где использовано это ключевое слово.

  Однако в JS методы, они же функции не обязательно принадлежать какому-то объекту.
  Кроме того, они могут принадлежать нескольким объектам, или менять объекты, которым принадлежат.
  По причине выше перечисленного в JS ключевое слово this указывает не на текущий объект, а на контекст вызова функции.

  В отличии от других языков программирования в JS ключевое слово this можно использовать глобально, тоесть вне, какого-либо класса, или функции. Глобальный объект предоставляется средой выполнения.
  Если код будет выполняться node.js - то ключевое слово this будет ссылаться на объект global
  Если код будет выполняться в браузере - то ключевое слово this будет ссылаться на объект Window
|--------------------------------------------------
*/

// console.log(this); // undefined - в VS Code
// console.log(this); // Window - в консоли браузера


// // === <<<--- Option I --->>>  ===
// document.writeln("Content zone height is "+this.innerHeight); // Content area height is 594
// document.writeln("Content zone width is "+this.innerWidth); // Content area width is 1366


// function getContentWidth () {
//   return this.innerWidth;
// }

// document.writeln("Content zone width is "+getContentWidth()); // Content area width is 1366


// // === <<<--- Option II --->>>  ===
// var person = {
//   name: "Dolly",
//   sayHello: function () {
//     return "Hello, "+this.name;
//   }
// };

// console.log(person.sayHello()); // Hello, Dolly


// // === <<<--- Option III --->>>  ===
/* 
Методы в JS не обязательно принадлежать какому-то объекту.
Поэтому, после объявления функции, мы можем указать, какому объекту, или объектам она будет принадлежать, это называется - установка контекста.
*/

// var person = {
//   name: "Dolly"
// };

//   function sayHello () {
//     return "Hello, "+this.name;
// }

// person.sayHello = sayHello;

// // document.writeln(person.sayHello()); // Hello, Dolly
// console.log(person.sayHello()); // Hello, Dolly


// // === <<<--- Option IV --->>>  ===
// var person = {
//   name: "Dolly",
//   sayHello: function () {
//     return "Hello, "+this.name;
//   }
// };

// var anotherPerson = {
//   name: "Hanna"
// };

// anotherPerson.sayHello = person.sayHello;

// console.log(person.sayHello()); // Hello, Dolly
// console.log(anotherPerson.sayHello()); // Hello, Hanna



// // === <<<--- Option V --->>>  ===
// var person = {
//   name: "Dolly",
//   sayHello: function () {
//     return "Hello, "+this.name;
//   }
// };

// var anotherPerson = {
//   name: "Hanna"
// };


// console.log(person.sayHello()); // Hello, Dolly
// console.log(person.sayHello.call(anotherPerson)); // Hello, Hanna
// // console.log(person.sayHello.apply[anotherPerson]); // Hello, Hanna




// var employee1 = {
//   name: "Hanna",
//   position: "Project manager",
//   salary: 1000
// };


// var employee2 = {
//   name: "Bill",
//   position: "Junior developer",
//   salary: 800
// };


// function promote (newPosition, salaryRise) {
//   this.position = newPosition;
//   this.salary += salaryRise;

//   return this.name+" is "+this.position+" and earns "+this.salary
// }

// promote.call(employee1, "Department head", 500);
// promote.call(employee2, "Middle developer", 300);