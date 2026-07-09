//spread 
const arr = [1,2,3];
const arr2 = [4,5,6];
// console.log([...arr,...arr2]) // [ 1, 2, 3, 4, 5, 6 ]

const obj = {a:10, b:20};
const obj2 = {c:30, d:40};
// console.log({...obj, ...obj2}); // { a: 10, b: 20, c: 30, d: 40 }

// shallow copy
const address = {address : {value : 20}};
const copy = address.address.value= 40;
// console.log(copy) // 40
// console.log(address) //{ address: { value: 40 } }

const data = {key : 10};
const key = data.key=5;
// console.log(key, data) // 5 { key: 5 }

const user = {address: {place: "attingal"}};
const copy1 = JSON.stringify(user);
const result = JSON.parse(copy1);
result.address.place = "thrissur"
// console.log(copy1, user) // {"address":{"place":"attingal"}} { address: { place: 'attingal' } }

const user2 = [1,2,3,4,5];
const str = JSON.stringify(user2);
// console.log(str) // [1,2,3,4,5]
// console.log(typeof(str)) // string
const res = JSON.parse(str);
// console.log(res); // [ 1, 2, 3, 4, 5 ]
// console.log(typeof(res)) // object
res.splice(4,0,6,7,8);
console.log(res);
// [
//   1, 2, 3, 4,
//   6, 7, 8, 5
// ]
console.log(user2) // [ 1, 2, 3, 4, 5 ]
