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

// Count total elements
const fruits = ["Apple", "Banana", "Orange", "Mango"];
let count = fruits.reduce((acc)=>{
    return acc + 1
},0)
// console.log(count) //4

// Count positive numbers
const nums4 = [-2, 5, -1, 8, 10];
let positive = nums4.reduce((acc,num)=>{
    return num > acc ?  acc+1 : acc
},0)
// console.log(positive) //3

// Count negative numbers
const nums5 = [-2, 5, -1, 8, 10];
let negative = nums5.reduce((acc,num)=>{
    return num < acc ? acc+1 : acc
},0)
// console.log(negative) //2

// Count even numbers
const nums6 = [10, 11, 12, 13, 14];
let even = nums6.reduce((acc,num)=>{
    return num %2 ==0 ? acc+1 : acc
},0)
// console.log(even) // 3

// Sum only even numbers
const nums7 = [10, 11, 12, 13, 14];
const sumeven = nums7.reduce((acc,num)=>{
    return num%2 ==0 ? acc+=num : acc
},0)
// console.log(sumeven) //36

// Sum only odd numbers
const odd = nums7.reduce((acc,num)=>{
    return num%2 !==0 ? num+acc : acc
},0)
// console.log(odd) //24


// Find average
const marks = [70, 80, 90, 100];
const avg = marks.reduce((acc,num)=>{
    return acc+num/marks.length
},0)

// console.log(avg) // 85

// Total salary
const employees = [
    { name: "John", salary: 30000 },
    { name: "Alice", salary: 45000 },
    { name: "David", salary: 35000 }
];
let total = employees.reduce((acc,employee)=>{
    return employee.salary + acc
},0)
// console.log(total) // 110000

// Count active users
const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "David", active: true }
];
let active = users.reduce((acc,user)=>{
    return user.active == true ? acc+1 : acc
},0);
// console.log(active) // 2

// Get total quantity
const cart = [
    { item: "Pen", qty: 2 },
    { item: "Book", qty: 3 },
    { item: "Bag", qty: 1 }
];
let quality = cart.reduce((acc,quality)=>{
    return quality.qty+acc
},0)
// console.log(quality) // 6


//  Count characters
const str1 = "JavaScript";
let count1 = str1.split('').reduce((acc)=>{
    return acc+1
},0)
// console.log(count1) // 10

// Count vowels
const str = "Programming";
let vowels = str.split('').reduce((acc,char)=>{
    return "aeiouAEIOU".includes(char) ? acc + 1 : acc;
},0)
// console.log(vowels) // 3


