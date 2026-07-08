const obj = {
    name: "soorya",
    age: 24,
    "favourite food" : "parotta and paneer",
}
// console.log(obj); { name: 'soorya', age: 24 }
// console.log(obj.name); soorya
// console.log(obj.age);  24
const key = "age";
console.log(obj["key"]) //undefined
console.log(obj[key]) // 24
console.log(obj["name"]) // soorya
console.log(obj["favourite food"]) // parotta and paneer
delete obj["favourite food"]
console.log(obj); // { name: 'soorya', age: 24 }