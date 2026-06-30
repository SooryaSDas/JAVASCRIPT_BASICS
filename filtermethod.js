// Filter 
// Filter even numbers
const nums = [10, 15, 20, 25, 30];
let even = nums.filter((nums)=>{
    return nums%2 ? '' : nums
})
// console.log(even) // [ 10, 20, 30 ]

// Filter odd numbers
const nums2 = [1, 2, 3, 4, 5, 6];
let odd = nums2.filter((nums)=>{
    return nums%2
})
// console.log(odd) // [ 1, 3, 5 ]

// Filter numbers greater than 50
const nums3 = [25, 80, 45, 90, 60];
let greate = nums3.filter((nums)=>{
   return nums > 50 
})
// console.log(greate) //[ 80, 90, 60 ]

// Filter active users
const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "David", active: true }
];

let user = users.filter(users=> users.active).map(users=> users.name);
console.log(user)
