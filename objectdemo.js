const obj = {
    name: "soorya",
    age: 24,
    "favourite food" : "parotta and paneer",
}
// console.log(obj); { name: 'soorya', age: 24 }
// console.log(obj.name); soorya
// console.log(obj.age);  24
// const key = "age";
// console.log(obj["key"]) //undefined
// console.log(obj[key]) // 24
// console.log(obj["name"]) // soorya
// console.log(obj["favourite food"]) // parotta and paneer
// delete obj["favourite food"]
// console.log(obj); // { name: 'soorya', age: 24 }

// computed property
// let a = "value";
// let b = {a: "hello"};
// console.log(b); // { a: 'hello' }
// let b = {[a]: "hello"};
// console.log(b) // { value: 'hello' }

let name = "ami";
let age = 24;
const student = {
    name,
    age,
    greet(){
        return "hi";
    }
}

// console.log(student) // { name: 'ami', age: 24, greet: [Function: greet] }
 console.log(student.greet) // [Function: greet]
  console.log(student.greet())  // hi