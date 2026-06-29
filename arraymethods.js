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

freshfruits.forEach((fruits,index)=>{
    console.log(fruits, index) 
})
                            // Apple 0
                            // Banana 1
                            // Orange 2
                            // Mango 3


