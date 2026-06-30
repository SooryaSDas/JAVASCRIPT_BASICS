// map
let arr = [1, 2, 3, 4, 5];
let value = arr.map((ele) => {
  return ele;
});
// console.log(value);

// Double all numbers
let double = arr.map((element)=>{
    return element * 2;
})
// console.log(double);

// Convert all names to uppercase
const names = ["john", "alice", "mark"];
let upper = names.map((val)=>{
    return val.toUpperCase();
})
// console.log(upper) // [ 'JOHN', 'ALICE', 'MARK' ]

// Add 10 to every number
const marks = [65, 70, 85, 90];
let addten = marks.map((ten)=>{
   return ten += 10;
})
// console.log(addten) // [ 75, 80, 95, 100 ]

// Find the square of each number
const nums = [1, 2, 3, 4, 5];
let square = nums.map((squ)=>{
    return squ * squ
})
// console.log(square) [ 1, 4, 9, 16, 25 ]

// Convert numbers into strings
const nums2 = [10, 20, 30];
let str = nums2.map((st)=>{
    return st.toString()
})
// console.log(str) //[ '10', '20', '30' ]

// Find the length of every word
const words = ["apple", "banana", "kiwi"];
let wordlength = words.map((len)=>{
    return len.length
})
// console.log(wordlength) // [5, 6, 4]

// Add "Mr." before every name
const name = ["John", "David", "Alex"];
let mr = name.map((mr)=>{
    return 'Mr. '+mr
})
// console.log(mr) // [ 'Mr. John', 'Mr. David', 'Mr. Alex' ]

// Convert every word to lowercase
const wordss = ["HELLO", "WORLD", "JAVASCRIPT"];
let low = wordss.map((low)=>{
    return low.toLowerCase()
})
// console.log(low) // [ 'hello', 'world', 'javascript' ]

// Reverse every word
const wor = ["cat", "dog", "apple"];
const rev = wor.map((rev)=>{
    return rev.split("").reverse().join("");
})
// console.log(rev); //[ 'tac', 'god', 'elppa' ]

// Add an exclamation mark
const words3 = ["Hi", "Hello", "Welcome"];
const addex = words3.map((word)=>{
    return word+"!"
})
// console.log(addex) //[ 'Hi!', 'Hello!', 'Welcome!' ]

// Get only the names
const users = [
    {name:"John", age:22},
    {name:"Alice", age:24},
    {name:"Mark", age:30}
];

let namesonly = users.map((name)=>{
    return name.name
})
// console.log(namesonly) //[ 'John', 'Alice', 'Mark' ]

// Get only ages
let onlyage = users.map((age)=>{
    return age.age
})
// console.log(onlyage) //[ 22, 24, 30 ]

// Replace all negative numbers with 0
const neg = [12,-3,8,87,-9,-6,98,-5];
const withzero = neg.map((zero)=>{
    return zero > 0 ? zero : 0     
})
// console.log(withzero)
// [
//   12, 0,  8, 87,
//    0, 0, 98,  0
// ]