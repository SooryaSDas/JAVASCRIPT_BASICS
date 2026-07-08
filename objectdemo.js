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
//  console.log(student.greet) // [Function: greet]
//   console.log(student.greet())  // hi

// for in loop

// for (let key in student){
//     console.log(student[key]) // ami 24 [Function: greet]
// }


let salary = {a:100, b:200, c:300};
let sum = 0
for (let key in salary){
    sum += salary[key]
}
// console.log(sum) // 600

// console.log(salary.hasOwnProperty("a")) // true

// console.log(salary.hasOwnProperty("d")) // false
// console.log("e" in salary) // false

// values
// console.log(Object.values(salary)) // [ 100, 200, 300 ]
// console.log(Object.values(salary).reduce((acc,value)=> acc + value)) // 600

// keys
// console.log(Object.keys(salary)); // [ 'a', 'b', 'c' ]

// entries
// console.log(Object.entries(salary)) // [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]

// assign
console.log(Object.assign({}, salary,student))
 {
  a: 100,
  b: 200,
  c: 300,
  name: 'ami',
  age: 24,
  greet: [Function: greet]
}