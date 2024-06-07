//Synynchronous

console.log('wakeup')
console.log('brush')
console.log('set bed')
console.log('breakfast')
console.log('study')
console.log('wash dishes')
console.log('lunch')

//Asynynchronous

console.log('boil water')

setTimeout(() => {
  console.log('add pasta')
}, 2000);

console.log("cut vegies")
console.log('add sauses')

//Single Thread

console.log('task 1')
console.log('task 2')
console.log('task 3')

// Traditional function expression with type annotations

let traditionalFunction = function (param1: number, param2: number): number {
  return param1 + param2;
};
let rel1 = traditionalFunction(4,60)


// Arrow function expression with type annotations

let arrowFunction = (param1: number, param2: number): number => param1 + param2;

let rel2 = arrowFunction(8,3)

console.log(`your rel is :${rel1}`)
console.log(`your rel is : ${rel2}`)