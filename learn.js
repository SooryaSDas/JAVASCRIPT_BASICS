// primitive - immutable

let lang1 = "en";
let lang2 = lang1;
lang2 = "fr";
console.log(lang1);
console.log(lang2);


// non-premitive - mutable
const name1 = {name : "soorya"};
const name2 = name1;
name2.name = "sandra";

if(name1 == name2){
    console.log("true");
}
else {
    console.log("false");
}