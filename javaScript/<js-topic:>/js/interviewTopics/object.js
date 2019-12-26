// 'use strict';

/**
|--------------------------------------------------
  === <<<--- OBJECT --->>>  ===
  Object - составный тип, в который могут входить данные разного типа. 
  Объект может состоять из строк, чисел, логических значений и т.д.
  id - ключ (свойство)
  15 - значение

  var obj = {
  id: 15,
  name: 'John',
  active: true
  }
|--------------------------------------------------
*/



// // === <<<--- Option I --->>>  ===

// var obj = {};
// Object.defineProperty(obj, 'a', {writable: true,  configurable: true,  value: 'a'});
// Object.defineProperty(obj, 'b', {writable: false, configurable: true,  value: 'b'});
// Object.defineProperty(obj, 'c', {writable: false, configurable: false, value: 'c'});

// console.log(obj.a);
// obj.a = 'b';
// console.log(obj.a);
// delete obj.a;

// console.log(obj.b);
// obj.b = 'a';
// console.log(obj.b);
// delete obj.b;

// console.log(obj.c);
// obj.b = 'a';
// console.log(obj.c);
// delete obj.b;
