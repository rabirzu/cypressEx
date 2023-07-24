// //This is my first JavaScript code
// console.log("Hello world");

// let nameUser = "Mosh";
// console.log(nameUser);

let firstName = "Mosh";
let lastName = "Hamedemi"; //String Literal
let age = 30; //number Literal
let isApproved = true; //Bolean Literal
let secondName = undefined;
let selectedColor = null;

//onst interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

//OBJECTS EXERCISES

let person = {
  firstName: "Mosh",
  age: 30,
};

//Dot notation
person.firstName = "John";

//bracket Notation
person["firstName"] = "Mary";

//console.log(person.firstName);

//ARRAY EXERCISES

let selectedColors = ["red", "blue"];
selectedColors[2]= 1;


//FUNCTIONS EXERCISES

//performing a task
function greet (name, lastName) {
    console.log("hello " + name + " "+lastName);
}
//calculating a value
function square (number){
    return number * number;
}
console.log(square(2));


//Equality Operators


//Strict equality type and value
console.log(1===1)
console.log('1'===1)

//lose equality (value)

console.log(1==1)
console.log('1'==1)

//Ternary operator

let points = 100;
let type = points > 100? 'gold' : 'silver';

//logical operators

//Logical AND (&&)

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoad = highIncome && goodCreditScore;

console.log('Eligible '+eligibleForLoad);

//Logical TRUE (||)

//NOT (!)

let applicationRefused = !eligibleForLoad

console.log('Aplication refused '+applicationRefused)


//Exercise swap
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

