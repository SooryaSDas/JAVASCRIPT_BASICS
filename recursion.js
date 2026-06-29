// recursion countdown

// function countdown(n){ 
//     if(n === 0){
//         console.log("Go");
//         return;
//     }
//     console.log(n);
//     countdown(n - 1);
// }

// countdown(3);


// rest operators

function sum(...numbers){
    return numbers.reduce((total,num)=>total+num);
}

console.log(sum(10,20)) //30
console.log(sum(10,20,30,40,50)) //150