//spread 
const arr = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr,...arr2]) // [ 1, 2, 3, 4, 5, 6 ]

const obj = {a:10, b:20};
const obj2 = {c:30, d:40};
console.log({...obj, ...obj2}); // { a: 10, b: 20, c: 30, d: 40 }

