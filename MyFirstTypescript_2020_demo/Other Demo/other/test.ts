//trying nodejs function

//console.log("Hello World")
//we can go to terminal and use node test.js to print hello world

//let const

//define a veriable 5
//let age = 5;

//the age must be a number
let age: number = 5;
age = 99;
//this will not work beacuse variable in js is typeless but not in ts, it wont convert
//age = "66";

//function
function main() {
    console.log("Hello World, you are" + age)
}

main();
//node text.js(not ts)
//hello world , you are 99