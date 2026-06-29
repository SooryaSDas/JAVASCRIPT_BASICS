const arr = [1, 2, 3, 4, 5];

// forEach - annonimous function and callback function
// arr.forEach((num)=>console.log(num)); // 1 2 3 4 5

let sum = 0;
arr.forEach((num) => {
  sum = sum + num;
  // sum += num;
});
// console.log(sum); //15

let name = [
  {
    name: "soorya",
  }
];

name.forEach((obj) => {
 let val =  obj.name = "sandra";
//  console.log(val);
});


const fruits = ["apple", "banana", "orange", "grapes"];
let fruitLog = fruits.forEach((fruitess, index, array)=>{
    // console.log(fruitess, index, array); //apple 0 [ 'apple', 'banana', 'orange', 'grapes' ]
                                        // banana 1 [ 'apple', 'banana', 'orange', 'grapes' ]
                                        //orange 2 [ 'apple', 'banana', 'orange', 'grapes' ]
                                        //grapes 3 [ 'apple', 'banana', 'orange', 'grapes' ]
})

// console.log(fruitLog); // undefined - foreach not return anything, it just iterate through the array and perform the operation on each element.

const freshfruits = ["Apple", "Banana", "Orange", "Mango"];

// print all elements of the array with their index using forEach method
freshfruits.forEach((fruits,index)=>{
    // console.log(fruits, index) 
})
                            // Apple 0
                            // Banana 1
                            // Orange 2
                            // Mango 3


// Print square of each number
// const nums = [2, 4, 6, 8];
// nums.forEach((num) => console.log(num * num));


// Print only even numbers
// const nums = [11, 20, 15, 40, 7, 60];
// nums.forEach((num)=> console.log(num %2 == 0 ? num : '')) // 20 40 60


// Print only names longer than 4 letters
const names = ["Ram", "Joseph", "Asha", "Alexander", "Tom"];

names.forEach((name) => name.length > 4 ? console.log(name) : ''); // Joseph Alexander