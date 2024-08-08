//  Primitive

// 7 types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34343434344n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "naagraj", "doga"];
let myObj = {
    name: "kaif",
    age: "19",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++

// Memory

// Stack (use in primitive datatype), Heap (use in non primitive datatype)

let myYoutubename = "codingworld"

let anothername = myYoutubename
anothername = "mathscode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "username@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "kaif@gogle.com"

console.log(userOne.email);
console.log(userTwo.email);