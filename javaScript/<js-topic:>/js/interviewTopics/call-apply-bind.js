// 'use strict';

/**
|--------------------------------------------------
  === <<<--- THIS --->>>  ===
  https://www.youtube.com/watch?v=OaR9Go75hOY&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=4

  Как использовать методы call apply & bind?
  Эти методы используются для вызова функции в определенном контексте.
  Контекст - это то, на что будет ссылаться this, если оно использовано в тебе данной функции

  В JS функции являются подвидом объекта.

  Когда мы объявляем функцию, к примеру:
  function doSomething() {
    return "I did.";
  }

  doSomething(); // I did.

  Когда мы объявляем фукнцию, она автоматически наследуется от некоего базового объекта называемого finction prototype - прототип функции.  

  Методы call apply и bind являются методами finction prototype. Это позволяет нам вызывать эти методы на любой функции через точку.

  Методы call и apply позволяют непосредственно выполнить функцию с определенным контекстом и опеределенными парамметрами.

  Методы bind позволяет связать функцию с контекстом и параметрами для того, чтобы выполнить ее позже.
|--------------------------------------------------
*/


// // === <<<--- Method call --->>>  ===

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

//   return this.name+" is "+this.position+" and earns $"+this.salary
// }


// promote.call(employee1, "Department head", 500); // Hanna is Department head and earns $1500
// promote.call(employee2, "Middle developer", 300); // Bill is Middle developer and earns $1100



// // === <<<--- Method apply --->>>  ===

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

//   return this.name+" is "+this.position+" and earns $"+this.salary
// }


// promote.apply(employee1, ["Department head", 500]); // Hanna is Department head and earns $1500
// promote.apply(employee2, ["Middle developer", 300]); // Bill is Middle developer and earns $1100



// === <<<--- Method bind --->>>  ===

// var employee1 = {
//   name: "Hanna",
//   position: "Project manager",
//   salary: 1000
// };

// function promote (newPosition, salaryRise) {
//   this.position = newPosition;
//   this.salary += salaryRise;

//   return this.name+" is "+this.position+" and earns $"+this.salary
// }

// // option I
// var promoteHanna = promote.bind(employee1);
// promoteHanna("Department head", 500) // Hanna is Department head and earns $1500

// // option II
// var promoteHannaToDepartmentHead = promote.bind(employee1, "Department head");
// promoteHannaToDepartmentHead(700); // Hanna is Department head and earns $1700










