console.log('Hello World'); 
// conbin all the js file to bundle 

// how to run the same code in node 
// node is a program inculdes google v8 javascript engine

//variable we use variable to store data temporarily

//var may got problem us let to declare a variable
// null = undefined?? using '' declare variable in js some people use ""
let name = 'Mosh';
console.log(name);
// rule of the namming a variable
// 1.cannot be a reserved keyword 
// 2.should be meaningful (the purpose of the variable) decpritive
// 3.cannot start with number
// 4. cannot contain a space or hyphen (-)
// camel case for naming a variable
// are case sensitive
// declare mutiable variable

let firstName;
// no good
let firstName = 'Mosh', lastName = 'Hamedani';
// better
let firstName = 'Mosh';
let lastName = 'Hamedani';

//constant
const interstRate = 0.3;
//const can not change(re-assign)
interestRate = 1;
console.log(interestRate);
//knowing the different between let and const

//primitives/ value types
// stirng number boolean undefined null

let name = 'Mosh'; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let firstName; // undefined
let selectedColor = null; // an opticne to not select anything
//reference types
// object array function

// dynamic typing
// static staticlally-typed
String name = 'John';
// dynamic dynamically-typed
let name = 'John';

typeof name
"string"
name =1;
1
typeof name
"number"

// number include all number type

// undefined is a type also is a values

//let name = 'Mosh';
//let age = 30;
let person = { // object literal
    name: 'Mosh',
    age: 30
}
// dot notation
person.name = 'John';

// bracket notation
let selection = 'name';
person [selection] = 'Mary';
person ['name'] = 'Mary';
console.log(person.name);

// arrays
let selectedColors = ['red','blue']; // empty array
selectedColors[2] = 'green'; //add new value into array
selectedColors[3] = 1; // can add different type of data (number)
console.log(selectedColors[0]);// number index start with 0
console.log(selectedColors.length); // show length

// function
// no need semicolumn for function
// performing a task
function greet(name, lastName) {// name is the parameter of the greet funciton (at the time of declareation)
    //body of the function logic of code
    console.log('Hello World' + name + ' ' + lastName);
}
greet('John'); // statement input can change how the method behive\
//john is an argument to the greet function(is the actual value with supply for that parameter)
greet('Mary');

greet('John', 'Smith');

// calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
//or
console.log(square(2));


