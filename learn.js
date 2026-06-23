// String Methods
let word = "arya";
// console.log(word.length); // 4
// console.log(word.indexOf("a")); // 0
// console.log(word.charAt(2)); // y
// console.log(word.charAt(0).toUpperCase()+word.slice(1)); // Arya
// console.log(word.slice(0,2)); // ar
// console.log(word.slice(-3, -1)); // ry


let str = "hello";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);


// Number Methods
// const value = 2.46;
// console.log(Math.ceil(value)); // 3
// console.log(Math.floor(value)); // 2
// console.log(Math.round(value)); // 2
// console.log(Math.round(value*10)/10); // 2.5
// console.log(value.toFixed(1)); // 2.5
// console.log(value.toFixed(2)); // 2.46
// console.log(value.toFixed(3)); // 2.460
// console.log(typeof value.toFixed(3)); // string
// const result = value.toFixed(1);
// console.log(result);
// console.log(result + 1); // 2.51



// primitive - immutable

// let lang1 = "en";
// let lang2 = lang1;
// lang2 = "fr";
// console.log(lang1);
// console.log(lang2);


// non-premitive - mutable
// const name1 = {name : "soorya"};
// const name2 = name1;
// name2.name = "sandra";

// if(name1 == name2){
//     console.log("true");
// }
// else {
//     console.log("false");
// }