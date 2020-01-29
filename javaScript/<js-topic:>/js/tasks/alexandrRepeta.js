



// |+|+|+| === MODULE 4.2 THIS - КОНТЕКСТ ИСПОЛНЕНИЯ ===  |+|+|+|

/**
 * Во время вызова этого метода, this будет ссылаться на тот объект, который вызвал функцию!
 * Кто вызвал фукнцию, на тот объект this и ссылается во время ее вызова.
 * Ключевое слово this получает значение не во время объявления функции, а во время вызова.
 * this определяется не местом объявления, а местом вызова.
 * this есть в любых фукнциях, кроме стрелок.
 * 
 * Проблема, когда метод объекта передаем как callback, то у нее теряется контекст.
 * 
 * 
 * THIS in arrow functions
 * Стрелочные функции были созданы для того, чтобы упростить передачу контекста на вложенные уровни. В отличии от обычных функций, контекст стрелки - называется лексический контекст, тоесть это буквально сслыка на то лексическое окружение, в котором функция была создана.
 * В обычных функциях контекст определяется тем, как вызвана фукнция, а в стрелочных фукнциях this определяется тем местом, где она была создана.
 * 
 * 
 * CALL APPLY & BIND
 * call & apply - это методы функции, которые позволяют привязать контекст и вызвать фукнцию с этим контекстом здесь и сейчас.
 * bind - это метод фукнции, который позволяет сохранить фукнцию с каким-то контекстом для ее вызова в будущем.
 */

// EXAMPLE I
// const product1 = {
//   label: 'Adidas',
//   showLabel () {
//     console.log(product1.label);
//   },
// };

// product1.showLabel(); // Adidas


// EXAMPLE II
// const product2 = {
//   label: 'Adidas',
//   showLabel () {
//     console.log(this); // {label: "Adidas", showLabel: ƒ}
//     console.log(this.label); // Adidas
//   },
// };

// product2.showLabel();



// EXAMPLE III
// const fn = () => {
//   console.log(this); // window
// };

// fn();



// EXAMPLE IV  - call, apply, bind
// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales += 1;
// }

// const mango = {
//   name: 'Mango',
//   sales: 10
// };

// const poly = {
//   name: 'Poly',
//   sales: 20
// };

// sell.call(mango, 'TV', 50); // вызываем функцию, привязываем контекст, передаем аргументы в виде списка
// sell.call(poly, 'CPY', 100); // вызываем функцию, привязываем контекст, передаем аргументы в виде списка


// sell.apply(mango, ['Phone', 350]); // вызываем функцию, привязываем контекст, передаем аргументы в виде массива
// sell.apply(poly, ['Wasch', 400]); // вызываем функцию, привязываем контекст, передаем аргументы в виде массива


// const polySell = sell.bind(poly, 'Imac', 1800);
// const mangoSell = sell.bind(mango, 'macBook', 1400);

// polySell(); // Manager Poly sold Imac for 1800
// mangoSell(); // Manager Mango sold Imac for 1400



// const product = {
//   label: 'Adidas',
//   showLabel() {
//     console.log(this); // {label: "Adidas", showLabel: ƒ}
//     console.log(this.label); // Adidas

//     return this.label;
//   },
// };


// const printLabel = function(callback) {
//   const label = callback();

//   console.log(`Product label: ${label}`); // Product label: Adidas
// };

// const boundShowLabel = product.showLabel.bind(product);

// // boundShowLabel();

// printLabel(boundShowLabel);





// |+|+|+| === MODULE 4.2 ФУНКЦИЯ КОНСТРУКТОР ===  |+|+|+|

/**
 * функция-конструктор - фабрика по созданию объектов, позволяет динамически создавать объекты.
 * new - это оператор. Если с помощью new вызваем фукнцию, то она вызвается как функция-конструктор.
 * Оператор new позволяет создать пустой объект и в контексте этого объекта вызвать эту функцию, чтоб она отработала как конструктор.
 * 
 * Manager - это схема
 * mango & poly - экземпляр
 */

 const Manager = function (name, sales = 0) {
   // this = {}
   this.name = name;
   this.sales = sales;

   this.sell = function (product, price) {
    console.log(`Manager ${this.name} sold ${product} for ${price}`);
    this.sales += 1;
   };

  //  return this // делает за нас
 };

 const mango = new Manager ('Mango', 5);
 console.log(mango); // Manager {name: "Mango", sales: 5}
 mango.sell('Ipod nano', 170)

 const poly = new Manager ('Poly', 10);
 console.log(poly); // Manager {name: "Poly", sales: 10}
 poly.sell('Ipod micro', 192)










// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#1   |+|+|+|+|+|+|+|

// const users = ['Mango', 'Ajax', 'Polu'];
// const login = prompt('Введите логин!');

// const isRegistered = usres.includes(login);

// if (isRegistered) {
//   console.log('Добро пожаловать!');
// } else {
//   console.log('Неверный пароль');
// }



// *** 2019.11.28 |+|+|+|+|+|+|+|   Example#2   |+|+|+|+|+|+|+|

// const matrix = [[1, 2, 3], [4, 5, 6] [7, 8, 9]];
// for (let i = 0; i < matrix.length; i += 1) {
// console.group(`Iteration ${i}`);
// console.log('i :', i);
// console.log(`matrix[${i}] :`, matrix[i]);

// for (let j = 0; j < matrix[i].length; j += 1) {
//   console.log('j :', j);
//   console.log(`matrix[${i}][${j}]:`, matrix[i][j]);
// }

// console.groupEnd(`Iteration ${i}`);
// }




// |+|+|+| === Lexical scoping #1 ===  |+|+|+|

// var a = 12;

// function f () {
//   var b = 3;

//   console.log(b); // будет каждый раз новая
//   console.log(a); // будет всегда одно и та же
// }

// f();
// f();
// f();


// // |+|+|+| === count #1 ===  |+|+|+|

// var count = 0;

// function counter () {
//   // функция counter будет влиять на переменную count
//   count++;

//   return count;
// }

// /* 
// При каждом вызове функции counter(), переменной count будет присваиваться новое значение.
// Нам важно, чтоб переменная count была в другой области видимости, поскольку, если бы она была в области видимости функции counter(), то при вызове counter() переменная count будет равна одному и тому же, а нам это не подходит!

// Нам необходимо, чтоб измененное состояние переменной count где-то сохранялось. Поэтому мы выносим переменную count в глобальную область видимости и обращаемся к ней из функции.

// А что, если задача создать несколько таких счетчиков?
// Нам каждый раз придется создавать глобальную переменную и функцию? Это не очень хорошо, поскольку мы стараемся в глобальной области видимости создавать поменьше переменных.
// */
// console.log(counter());
// console.log(counter());
// console.log(counter());




// |+|+|+| === closure #1 ===  |+|+|+|

// function Counter() {
//   var count = 0;

//   return function() {
//     count++;

//     return count;
//   }
// }

// /* 
// Создаем функцию Counter, которая внути себя объявляет переменную count и возвращает новую функцию.
// Вот эта новая функция, которая возвращается из Counter, про нее говорят, что она замкнутая на область видимости родителя (function Counter).

// Как это использовать? 
// Мы вызываем родительскую функцию и создается наш счетчик.
// Функция которую возвращает Counter, она сохраняется в переменную и она замкнутая на ту область видимости, которая возникла.
// */

// var oneCounter = Counter();

// /* 
// Теперь, когда мы вот эту вернувшуюся функцию будем вызывать много, много раз, она будет обращаться к той переменной, которая видна только ей и отдуда будет считывать значение и туда же его и записывать.
// */

// console.log(oneCounter());
// console.log(oneCounter());
// console.log(oneCounter());

// /* 
// При этом, если нам нужно будет создать еще один независимый счетчик, который будет независить от предыдущего, нам достаточно будет еще раз вызвать Counter() и мы получим новый счетчик.

// Каждый раз при вызовые Countera создается новая область видимости, в ней есть переменная count, но каждый раз она своя и каждый раз из них возвращаются новые функции, которые мы и сохраняем в переменную, а потом и вызываем неоднократно.

// Каждая из этих функций, она замкнута на совю область видимости и соответственно получает свой count, поэтому и счетчики независимы.
// */

// var secondCounter = Counter();
// var thirdCounter = Counter();

// console.log(secondCounter());
// console.log(thirdCounter());
// console.log(secondCounter());

// console.log(thirdCounter());
// console.log(secondCounter());
// console.log(thirdCounter());