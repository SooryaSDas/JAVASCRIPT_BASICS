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