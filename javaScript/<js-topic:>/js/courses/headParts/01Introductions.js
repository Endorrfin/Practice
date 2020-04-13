

// ================================================
//          THE HEAD PARTS - Introductions
// ================================================


// ======= EXAMPLE I =======
// const num = 3;
// function multiplyBy2 (inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }

// const name = 'Will'

// const output = multiplyBy2(4);
// const newOutput = multiplyBy2(10);


// ======= EXAMPLE II =======
// function tenSquared() {
//   return 10 * 10;
// }
// console.log(tenSquared());



// ======= EXAMPLE III =======
// function tenSquared() {
//   return 10 * 10;
// }
// console.log(tenSquared()); // 100


// ======= EXAMPLE IV =======
// function tenSquared(num) {
//   return num * num;
// }
// console.log(tenSquared(10));
// console.log(tenSquared(8));
// console.log(tenSquared(11));
// console.log(tenSquared(100));





// ======= FUNCTIONS IV
// ======= Part I =======
// function copyArrayAndDivideBy2(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] / 2);
//   }
//   return output;
// }

// const myArray = [1, 2, 3]
// let result = copyArrayAndDivideBy2(myArray);




// ======= Part II =======
// function copyArrayAndMultiplyBy2(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] * 2);
//   }
//   return output;
// }

// const myArray = [1, 2, 3]
// let result = copyArrayAndMultiplyBy2(myArray);




// ======= Part III =======
// function copyArrayAndAddBy3(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] + 3);
//   }
//   return output;
// }

// const myArray = [1, 2, 3]
// let result = copyArrayAndAddBy3(myArray);




// ======= Part IV *** =======
// function copyArrayAndManipulate(array, instructions) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//   }
//   return output;

//   function multiplyBy2(input) {
//     return input * 2;
//   }
// }

// let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// console.log(result);