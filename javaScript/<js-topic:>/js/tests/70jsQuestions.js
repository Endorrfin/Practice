
// ===|=== 1. 











































// ===|=== пример, где немедленно после срабатывания прошлого setTimeout() вызывается следующий, да так чтобы это удовлетворяло условиям задачи.

// const timeout = function(fun) {
//   console.time('timeoutFun');
//   setTimeout(fun, 1000);
// }

// const dowork = async function() {
//   // "do lots of work"
//   console.time('work');
//   let s = '';
//   for (let i = 0; i < 1000000; i++) {
//     s += Math.random() > 0.5 ? '+' : '-';
//   }
//   console.timeEnd('work');
// }

// const run = function() {
//   const fun = (counter) => async () => {
//     console.timeEnd('timeoutFun');
//     if (counter++ < 10) {
//       timeout(fun(counter));
//     }
//     dowork();
//   }
//   timeout(fun(0));
// }

// run()



