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
fruits.forEach((fruitess, index, array)=>{
    console.log(fruitess, index, array);
})

