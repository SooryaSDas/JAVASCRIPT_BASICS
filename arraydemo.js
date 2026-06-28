// let num =[1,2,3,4,5];
// console.log(num); //[ 1, 2, 3, 4, 5 ]
// console.log(num[0]); //1
// console.log(num.length); // 5
// console.log(num[num.length-1]); //5
// console.log(num.at(-1)); //5
// console.log(num.at(-2)) //4


// array methods
// let num =[1,2,3,4,5];
// console.log(num.push(10), num) // 6 [ 1, 2, 3, 4, 5, 10 ] add a new element at the end of the array
// console.log(num.pop(), num); // 5 [ 1, 2, 3, 4 ] remove the last element of the array
// console.log(num.shift(), num); // 1 [ 2, 3, 4, 5 ] remove the first element of the array
// console.log(num.unshift(10), num); // 6 [ 10, 1, 2, 3, 4, 5 ] add a new element at the beginning of the array

let num =[10,20,30,40,50];

// console.log(num.slice(1, 5), num); // [ 20, 30, 40, 50 ] [ 10, 20, 30, 40, 50 ] return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// console.log(num.slice(2), num); // [ 30, 40, 50 ] [ 10, 20, 30, 40, 50 ]
// console.log(num.splice(-2), num) //[ 40, 50 ] [ 10, 20, 30 ] - it calculate from end of the arry and start with 1
// console.log(num.splice(-4,2), num) // [ 20, 30 ] [ 10, 40, 50 ] - it calculate from end of the arry and start with 1 and remove the next 2 elements


// console.log(num.splice(2, 1, 30), num) // [ 30 ] [ 10, 20, 30, 40, 50 ] - it calculate from start of the arry and start with 1 and remove the next 1 elements and add new element at that index
// console.log(num.splice(5, 0, 60), num); // [] [ 10, 20, 30, 40, 50, 60 ]
console.log(num.splice(2,1,80, 90, 100), num); // [ 30 ] [ 10, 20, 80, 90, 100, 40, 50 ] - it calculate from start of the arry and start with 1 and remove the next 1 elements and add new element at that index
// console.log(num.splice(2,0,5),num); // [] [ 10, 5, 20, 30, 40, 50 ]
// console.log(num.splice(1,0,3),num) // [] [ 10, 3, 20, 30, 40, 50 ]
// console.log(num.splice(0,1,1), num) // [ 10 ] [ 1, 20, 30, 40, 50 ]
console.log(num.splice(1,1,80),num);// [ 20 ] [ 10, 80, 30, 40, 50 ]



// const fruits = ["Apple", "Orange"];

// fruits.splice(1, 0, "Banana");
// console.log(fruits);