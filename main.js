//Synynchronous
console.log('wakeup');
console.log('brush');
console.log('set bed');
console.log('breakfast');
console.log('study');
console.log('wash dishes');
console.log('lunch');
//Asynynchronous
console.log('boil water');
setTimeout(function () {
    console.log('add pasta');
}, 2000);
console.log("cut vegies");
console.log('add sauses');
//Single Thread
console.log('task 1');
console.log('task 2');
console.log('task 3');
// Traditional function expression with type annotations
var traditionalFunction = function (param1, param2) {
    return param1 + param2;
};
var rel1 = traditionalFunction(4, 60);
// Arrow function expression with type annotations
var arrowFunction = function (param1, param2) { return param1 + param2; };
var rel2 = arrowFunction(8, 3);
console.log("your rel is :".concat(rel1));
console.log("your rel is : ".concat(rel2));
