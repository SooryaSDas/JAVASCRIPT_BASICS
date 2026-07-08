const obj = {
    name: "soorya",
    age: 24
}
// console.log(obj); { name: 'soorya', age: 24 }
// console.log(obj.name); soorya
// console.log(obj.age);  24
const key = "age";
console.log(obj["key"]) //undefined
console.log(obj[key]) // 24
console.log(obj["name"]) // soorya