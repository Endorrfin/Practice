// ============ Scopes & Hoisting ============
// var variable = 10;
// (()=>{
//    console.log(variable); // 10 -> undefined
//    var variable = 20;
//    console.log(variable); // 20
// })();




// ============ Scopes & Hoisting ============
// var variable = 10;
// (()=>{
//    console.log(variable);   // ReferenceError
//    let variable = 20;
//    console.log(variable);   // 20
// })();






// ============ Scopes & Hoisting ============
// var variable = 10;
// (()=>{
//    console.log(variable);   // 10
//    variable = 20;
//    console.log(variable);   // 20
// })();





// ============ Scopes & Hoisting ============
// var variable = 10;
// (()=>{
//    console.log(variable);   // 10
//    variable = 20;
//    console.log(variable);   // 20
// })();
// var variable = 30;
// console.log(variable); // 30






// ============ Scopes & Hoisting ============
// var variable;
// variable = 10;
// (()=>{
//    console.log(variable);   // 10
//    variable = 20;
//    console.log(variable);   // 20
// })();
// variable = 30;
// console.log(variable); // 30







// ============ Scopes & Hoisting ============
// var variable = 10;
// (()=>{
//    console.log(variable);   // undefined
//    var variable = 20;
//    console.log(variable);   // 20
// })();

// console.log(variable); // 10
// var variable = 30;







// ============ Scopes & Hoisting ============
// var variable;
// variable = 10;
// (()=>{
//    var variable;
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// console.log(variable); // 10
// variable = 30;
// console.log(variable); // 30







// ============ Scopes & Hoisting ============
// var variable = 10;
// (()=>{
//    console.log(variable);   // 10
//    variable = 20;
//    console.log(variable);   // 20
// })();

// console.log(variable); // 10 -> 20
// var variable = 30;







// ============ Scopes & Hoisting ============ 
// var variable = 10;
// (()=>{
//    variable_3 = 35;
//    console.log(variable_3); // 35
//    var variable_3 = 45;
//    variable_2 = 15; // ReferenceError
//    console.log(variable);   // 10
// })();

// console.log(variable_2); // Error
// console.log(variable_3); // 45 -> ReferenceError
// var variable=30;








// ============ Scopes & Hoisting ============





 












