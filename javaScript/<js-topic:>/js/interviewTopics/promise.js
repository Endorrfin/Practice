
// ============ PROMISE ============
// function job() {
//   return new Promise(function(resolve, reject) {
//       reject();
//   });
// }

// let promise = job();

// promise

// .then(function() {
//   console.log('Success 1');
// })

// .then(function() {
//   console.log('Success 2');
// })

// .then(function() {
//   console.log('Success 3');
// })

// .catch(function() {
//   console.log('Error 1'); // Error 1
// })

// .then(function() {
//   console.log('Success 4'); // Success 4
// });





// ============ PROMISE ============
// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data);  // success

//   return job(false);
// })

// .catch(function(error) {
//   console.log(error); // error

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data); // Error caught

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });





// ============ PROMISE ============
// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//   console.log(data); // success

//   return job(true);
// })

// .then(function(data) {
//   if (data !== 'victory') {
//       throw 'Defeat';
//   }

//   return job(true);
// })

// .then(function(data) {
//   console.log(data);
// })

// .catch(function(error) {
//   console.log(error); // error -> Defeat

//   return job(false);
// })

// .then(function(data) {
//   console.log(data);

//   return job(true);
// })

// .catch(function(error) {
//   console.log(error); // error

//   return 'Error caught';
// })

// .then(function(data) {
//   console.log(data); // 'Error caught'

//   return new Error('test');
// })

// .then(function(data) {
//   console.log('Success:', data.message); // Success: test
// })

// .catch(function(data) {
//   console.log('Error:', data.message); // error -> null
// });





    // ============ PROMISE TASK in Andersen ============
// Promise.reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'с')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))




    // ============ PROMISE TASK in Andersen ============
// Promise.resolve('Error')
// .then('12312321')
// .then((e) => {
//   console.log(e); // Error
//   throw new Error('Error again')
// })
// .catch('undefinde happen')
// .catch((e) => console.log(e)) // Error again => "Error again"
// .then((a) => Promise.reject(a + ' is'))
// .then((a) => a + ' not')
// .catch((a) => console.log(a + ' undefined')) // undefined is undefined

// function catchError(arg1) {
// return arg1 + ' happen';
// }






// ============ PROMISE - InSimpleWords ============
/*
* Promise - это объект, у него есть сслыка __proto__
* Promise - может в себе хранить 3 состояния и может хранить в себе неограниченное к-во значений, привязанных к этому промису.
* Понятия, как частично выполненное обещание в JS нет.
* Обещание из неопределенного состояния (pending) переводится всего лишь 1 раз либо reject либо fulfilled
* [[PromiseStatus]] - состояние статуса: pending || resolved || rejected
* [[PromiseValue]] - результат обещания, конкретная информация
* Важно не столько Promise - обещание, как его результат.
* Функции resolve & reject - это 2 механизма, чтобы перевести promise в состояние отличное от pending
* */

// 1. Пишем фукнкцию конструктор рождающую promise и сам объект promise
// const promise = new Promise((function (resolve, reject) {
// }))
//
// console.log(promise);
// pending - состояние неопределенности, доно обещание что-то сделать.


// 2. Promise выполнен успешно
// const promise = new Promise((function (resolve, reject) {
//     resolve('success')
// }))
//
// console.log(promise);
// resolved - успешно выполненное обещание.



// 3. Promise example
// var promise2 = new Promise(function (resolve, reject) {

// OPTION I
    // Я обещею посчитать сумму 2-х чисел
    // var sum = 5 + 7;
    // resolve(sum); // обещание выполнено resolved


    // Я обещаю разделить одно число на другое, но если попадается ноль, в качестве делителя, то обстоятельства сильнее меня.
    // Деление на ноль запрещено

// OPTION II
//     var resultDiv = div(12, 0);
//     if (resultDiv == false) {
//         reject('unsuccess');
//     } else {
//         resolve(resultDiv);
//     }
// })

// console.log(promise2);


// function div(a, b) {
//     if (b == 0) {
//         return false;
//     } else {
//         return a/b;
//     }
// }



// 4. Promise example
// const promise3 = new Promise(function (res, rej) {
//     console.dir(res);
// })



// 5. Promise example
const promise4 = new Promise(function (resolve, reject) {
    var setOfNumbers = alert('Выберите одно число из \n 3, 4, 5');
    var num = +prompt('загадайте число из приведенных');
    console.log("I'm thinking...");

    setTimeout(function (){
        if (num == randomInteger(5, 10))
        },2000)
})


function randomInteger(min, max) {
var ranв = min - 0.5 + Math.random() * (max - min + 1)
}



