// function
// function sum (a,b) {
//     return a+b;
// }

// console.log(sum(2,3));


// first class functions
// function sum (a,b) {
//     return function () {
//         return a+b;
//     }
// }

// function sum (function () {},b) {
//    return {}
// }


// function sum2 (a,b) {
//    return {}
// }

// sum2(function (){},2)


// function are 2 types 1) function declaration 2) function expression

// function declaration
function sum(a, b) {
    return a + b;
}

// function expression - assign to a variable, also it will call it named function expression
let sum2 = function(a, b) {
    return a + b;
};

// this will called the anonymous function expression
let calculate = function(a,b){
    return a+b;
}
