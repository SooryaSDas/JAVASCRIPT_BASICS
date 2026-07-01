// Find the sum of all numbers
const nums = [10, 20, 30, 40];
let value = nums.reduce((acc,num)=>{
    return acc + num;
})
// console.log(value) //100

// Find the product of all numbers
const nums1 = [2, 3, 4];
let value1 = nums1.reduce((acc,nums)=>{
    return acc * nums;
})
//  console.log(value1) //24

// Find the largest number
const nums2 = [12, 45, 7, 89, 23];
let large = nums2.reduce((acc, num)=>{
    return num > acc ? num : acc;
})
// console.log(large) //89

// Find the smallest number
const nums3 = [12, 45, 7, 89, 23];
let small = nums3.reduce((acc,num)=>{
    return acc < num ? acc : num
})
// console.log(small) //7

