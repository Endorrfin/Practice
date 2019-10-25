/**
|--------------------------------------------------
| ======= <<<--- TASK #1 - palindrome --->>>  =======
|--------------------------------------------------
*/

/*
Написать функцию, которая проверяет, является ли строка палиндромом, или нет. Вернуть false или
true. Примечание: Палиндро́м - пе́ревертень — число, буквосочетание, слово или текст, 
одинаково читающееся в обоих направлениях.
*/

// ---------------- OPTION I ----------------
function palindrome(str) {
  str = str.toLowerCase(); // перевод строки в нижний регистр
  console.log(str);
  str2 = str.split(''); // трансформация слово по буквенно в массив
  console.log(str2);
  str2 = str2.reverse(); // переворачивание массива задом на перед
  console.log(str2);
  str2 = str2.join(''); // объединение побуквенного массива в слово
  console.log(str2);

  if (str == str2) {
    return true
  } else {
    return false
  }
}

// console.log(palindrome('aBBa'));
// console.log(palindrome('каток'));
// console.log(palindrome('потоп'));
// console.log(palindrome('око'));
// console.log(palindrome(''));
// console.log(palindrome('кландайк'));

// ---------------- OPTION II ----------------
const palindrome2 = data => {
  data.toLowerCase();
  return data == [...data].reverse().join('');
}

console.log(palindrome2('SOS'));
console.log(palindrome2('SOFT'));

// ---------------- OPTION III ----------------
isPalindrom = string => string.toLowerCase() === [...string].reverse().join('').toLowerCase();

console.log(palindrome2('SOS'));
console.log(palindrome2('Ароза упала на лапу Азора'));

// Заключение: Какие минусы данного подхода?
// если в данных есть спецсимвол эмодзи, который складывается с 2-х симовол результат будет некорректный.

/**
|--------------------------------------------------
  ======= <<<--- TASK #2 - кавычки  --->>>  =======
  Написать решение, которое:
  1. Проверит в правильном ли порядке написаны кавычки!
  2. Проверит соответствует ли к-во открывающих кавычек к-ву закрывающих кавычек.
|--------------------------------------------------
*/

let roundBrackets = '()()((())))';
// проверка длинны строки (length)
console.log(roundBrackets.length);

// создадим глобальную переменную count
let count = 0;

// перебираем с помощью цикла каждую кавычку
for (let i = 0; i <= roundBrackets.length; i++) {
  // console.log(roundИrackets[i]);
  if (roundBrackets[i] == '(') {
    count++; // увеличиваем на единицу count = count + 1
  }
  if (roundBrackets[i] == ')') {
    count--; // уменьшаем на единицу count = count - 1
  }
  // Делаем проверку правельности последовательности кавычек
  if (count < 0) {
    console.log(false);
    break // выходим из цыкла проверки
  }
}
console.log(count);

if (count != 0) {
  console.log(false)
} else console.log(true);




/**
|--------------------------------------------------
| ======= <<<--- TASK #3 - Конем ходи --->>>  =======
Написать с помощью javaScript решение, которое бы визуализировало ходы конем на шахматной доске
|--------------------------------------------------
*/

// Создаем двумерный массив, который характеризует модель шахматной доски
let chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

// Отрисуем массив
function draw() {
  let out = '';
  let m = 0; // счетчик
  // создание 1-го цикла, который рисует горизонтальные строки
  for(let i = 0; i < chess.length; i++) {
    // создание 2-го цикла, который будет рисовать внутри строки ячейки
    let arr = chess[i]; // arr = каждая строка для упрощения визуального восприятия.
    for(let j = 0; j < arr.length; j++){
      // отрисуем кубики шахматной доски белый / серый
      if (m % 2 == 0) {
        // создание блока + добавление дата-атрибутов data-x="${j}" data-y="${i}" для маркировки ячеек на шахматной доске, чтоб их идентифицировать
        out+= `<div class="chess-block" data-x="${j}" data-y="${i}"></div>`;
      } else {
        out+= `<div class="chess-block bg-black" data-x="${j}" data-y="${i}"></div>`;
      }
      m++ // необходимо делать после каждой итерации
    }
    m++ // после итерации 1-й строки тоже увеличиваем m на единицу
  }
  // вывод блока на страницу
  document.querySelector('#chessBoard').innerHTML = out;
  document.querySelectorAll('.chess-block').forEach(function(element) {
    element.onclick = horse;
  });
}

// запуск отрисовки функцией
draw();


function horse() {
  // Реализация зачистки поля после клика
  document.querySelectorAll('.chess-block').forEach(function(element) {
    element.classList.remove('green');
    element.classList.remove('active');
  })


  let x = this.dataset.x;
  let y = this.dataset.y;
  // проверяем позволяет ли функция получать координаты ячеек x & y
  console.log(x + ' ' + y);

  // подсветка ячейки по которой кликнет пользователь
  this.classList.add('green');

  // Прописываем правила для проверки возможных ходов
  // Атрибут data - это всегда строка, поэтому добавляем "+" перед всеми x & y для преобразования результата string в number
  if(+x + 2 < 8 && +y + 1 < 8) {
    document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active'); 
  }
  if(+x + 2 < 8 && +y - 1 >=0) {
    document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active');
  }
  if(+x - 2 >=0 && +y + 1 < 8) {
    document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active'); 
  }
  if(+x - 2 >=0 && +y - 1 >=0) {
    document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active');
  }
  if(+x + 1 < 8 && +y - 2 >=0) {
    document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active'); 
  }
  if(+x - 1 >=0 && +y - 2 >=0) {
    document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active');
  }
  if(+x + 1 < 8 && +y + 2 < 8) {
    document.querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active'); 
  }
  if(+x - 1 >=0 && +y + 2 < 8) {
    document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active');
  }
}






/**
|--------------------------------------------------
| ======= <<<--- TASK #4 -  --->>>  =======
|--------------------------------------------------
*/
/*

*/

/**
|--------------------------------------------------
| ======= <<<--- TASK #5 -  --->>>  =======
|--------------------------------------------------
*/
/*
/*

*/


/**
|--------------------------------------------------
| ======= <<<--- TASK #6 -  --->>>  =======
|--------------------------------------------------
*/
/* 

*/