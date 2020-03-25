
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



