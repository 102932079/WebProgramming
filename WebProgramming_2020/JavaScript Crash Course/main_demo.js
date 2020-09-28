//  for debugging don use alert here use the console in broswer's dev tool
alert('Hello World');
console.log('Hello World');
// DOM user interface
// MDN console great guide for javascript
console.error('This is an error');// red icon
console.warn('This is an error');// yellow tag

// var(gobally scope, less used), let , const (more commonlly  used , let and const have a block-level scope)

// let re-assign values
let age = 30;
age = 31;
console.log('age');

// const cant be changed
// always use const unless you know you are going to change the values
const age = 30;
age = 31;
console.log('age');
// type error assignment to constant variable

const score;
console.log(score);
// syntax error missing initializer in const declarttion (array)
// we have to use a values when using const 
const score = 10;
console.log(score);

// datatype

// string, number, boolean, null, undefined, symbol(rare)

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null; // is a variable but empty
const y = undefined;
let z;

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof rating); // number
console.log(typeof isCool); // boolean
console.log(typeof x); // console will showing object but its null
//object error js null is object typeof 
//In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. (reference)
//A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.
console.log(typeof y); // undefined
console.log(typeof z); // undefined

const name = 'John';
const age = 30;
// concatenation
console.log('My name is' +  name + ' and I am ' + age); // old way
// template string (es6 or es 2015)
// template literals instead of quetes use backticks
// ${} for variable
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);

const s = 'Hello World';
console.log(s.length); // property method 12
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); // substrct string from positon 0 to 5 (hello ) 
console.log(s.substring(0, 5).toUpperCase); // substrct string from positon 0 to 5 and make it upper case (HELLO ) 
console.log(s.split('')); // split string into array
const s = 'technology, computers, it, code';
console.log(s.split(',')); // 0:technology 1:computers 2:it 3:code length 4

//arrays - variables that hold multiple values
/* muti
line
comment*/
const numbers = new Array(1,2,3,4,5); // this is a constrcutor
console.log('numbers'); // (5)[1,2,3,4,5]
const fruits = ['apple', 'oranges', 'pears', 10, true]; // in javascript we can have mutiple type of variable in same array
// array is 0 based
// some language need to be have same type , some has to be set up certain lengh , in js have a lot of freedoms
fruits = [];// error
fruits[3] = 'grapes';
console.log(fruits);
console.log(fruits[1]);
fruits.push('mangos');//with the push funciotn we can add new variable to the "end" no matter how many in the array
fruits.unshift('strawberries');// too add at the beginning
fruits.pop();// pop the last one off from the array
console.log(Array.isArray(fruits)); // to check something in the array return boolean()true
console.log(fruits.indexOf('oranges')); // to check the index of that values (position,location) 2 

// javascript is not statically typed
// const name:string; (typescript)

// object literal
const person =
{
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    addreess://sub object
    {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);// to acess signle value use dot syntax
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);//to get movies
console.log(person.addreess.city)//to get city
alert(person);// object object(not a way to display)
// to create variable
// part of es6 (advaned new feature)
const { firstName, lastName} = person; // pulling things out
console.log(firstName);// get john
const { firstName, lastName, addreess: {city}} = person; // reassign sth 
console.log(city); // get city
//add property
person.email = 'john@gamil.com';
console.log(person);

const todos = 
[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos); // array of objects
console.log(todo[1].text);// only print out he meeting with boss
// json converter(json formatter) translate javascript into json for server
const todoJSON = JSON.stringify();//translate method and then passing the todo
console.log(todoJSON);//get the scipte with json (thats how we send data to server)

// for loop
for(let i = 0; i <= 10; i++ )//the first parameter will be the iterator or the variable, use semi conlomn to seperate this, next going to be the condition, the last part will be the increment(add 1 to this variable)
{
    console.log(i);//print 11 time (hit 11 out of condition stopped)
    console.log(`For Loop Number: ${i}`);
}

// while
let i = 0;
while(i < 10) 
{
    console.log(`While Loop Number: ${i}`);
    i++;
}

//continues with todo
for(let i = 0; i <= todos.length; i++ )
{
    console.log(todos[i].text);// the index will the i value, this will print out all the text from three objects
}
// this is the another way to do it same as above
for(let todo of todos) // todos is the name of array todo can be anything just a temper name(t or anything else)
{
    console.log(todo.text);
}
//high order array funciton working as method
// foreach(loop through them), map (allow to create a new array from a array), filter(allow to create new array base on condition)

//foreach
todos.forEach(function(todo) // can takes mutiple variable but the first one is going to be the variable that you want to use as each items or in this case each todo
{
    console.log(todo.text);
});

//map (with map will return array)
const todoText = todos.map(function(todo)
{
    return todo.text;// will turn the todo text into array and return
});
//will return a whole new array with just text
console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
});
console.log(todoCompleted); //will return with two values(when the condition is been given) the whole todo array

//filter with a map
const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
}).map(function(todo)
{
    return todo.text;
})
console.log(todoCompleted); //will return with two values(when the condition is been given) only the todo.text array
// super importatnt and powerful 
// videos for this high order array methods 

//conditional
const x = 10;
// some developer will choose when  to use == or === , but you should always trying to match the datatype with ===
//simple if else
if (x == 10) // with two == sign no mater x is number or string it will be same x = 10; x = '10'; same thing
             // but with === sign the data type need to be same as well x = 10; x = '10'; not the same thing
{
    console.log ('x is 10');
} 
else
{
    console.log('x is NOT 10');
}
// adding else if
//you can use as many as else if when you required
if (x === 10) // === datatype matched
             
{
    console.log ('x is 10');
} 
else if(x > 10)
{
    console.log('x is greater than 10');
}
else
{
    console.log('x is less than 10');
}
// mutiple condition
// or ||
const x = 4;
const y = 11;
if (x > 5 || y > 10) // or doulbe pipe characters || one of the this true
{
    console.log('x is more than 5 or y is more than 10');
}
// and &&
const x = 6;
const y = 11;
if (x > 5 && y > 10) // or doulbe pipe characters || one of the this true
{
    console.log('x is more than 5 and y is more than 10');
}
// this is way better than nested conditional loop(much cleaner)
if (x > 5)
{
    if(y = 10)
    {
        console.log('x is more than 5 and y is more than 10');
    }
    else
    {
        console.log('x is NOT more than 5 and y is NOT more than 10');
    }
}

// ternary operator
const x = 11;
const color = x > 10 ? 'red' : 'blue';// ? is the ternary operator (than) : colomn (else)
console.log(color);

const x = 11; // 9 red 11 blue
const color = x > 10 ? 'red' : 'blue';
const color = green;//this will get 'color is NOT red or blue'
switch(color)
{
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;

}

//funciton
function addNums(num1, num2)
{
    console.log(num1 + num2);
}// nothing will happen before we pass in any number with variable
addNums(5, 4); // will get 9
// when return NaN means not a number

function addNums(num1 = 1, num2 = 1)
{
    console.log(num1 + num2); // normally we use return num1 + num2; not the console log and then console.log the whole methods (addNumber())
}
addNums(); // and this will return 2 even i didn't pass any variable
addNums(5, 5);// console will overwrite 1 and 1 and return 10 as calculation result
console.log(addNums());

//es6 or es2016 function
const addNums = (num1 = 1, num2 =1) => // isstad of using the key word funciotn name it as a variable
// put = before the variable and => after the parameter
{
    return num1 + num2;
}
console.log(addNums(5, 5));
// if we want to return sth this is even better
const addNums = (num1 = 1, num2 =1) => console.log(num1 + num2);
addNums(5, 5);
// dont even need console log
const addNums = (num1 = 1, num2 =1) => num1 + num2; // return no need here 
const addNums = (num1 = 1, num2 =1) => { return num1 + num2;}// or return work with patasis
console.log(addNums(5, 5));
// only one variable
const addNums = num1 => num1 + 5;
console.log(addNums(5));

todos.forEach((todo) => console.log(todo));// passing array

//lexical this the linq => will have advantace when dealing the situation that has this key word

// object-oriented programming (object literals) constructor function with prototype or es 6 classese two way
// constructor function
// es5
function Person(firstName, lastName, dob)
{
    this.firstName = firstName; // after equal sign called the values that passed in
    this.lastName = lastName;
    this.dob = dob; // dob here is string we also could set up as date datatype
    this.dob = new Date(dob); // date object 
    this.getBirthYear = function() // we also can set up a method
    {
        return this.dob.getFullYear();
    }
    this.getFullName = function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person1 = new Person('Mary', 'Smith', '3-6-1970'); // person1 is the object Person() is the class and we also has defined how to pass in the variable
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob.getFullYear()); // date object (different things with date funciotn)
console.log(person1.getBirthYear());
console.log(person1.getFullName());

//prototypes
// in defalut property we have prototype object and all other attubute and method are mixed together 
// we can move the not often used method into prototype
// under the function
Person.prototype.getBirthYear = function()
{
    return this.dob.getFullYear();// by doing this we could remove the method in constructor
}
Person.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`;// by doing this we could remove the method in constructor
}
console.log(person1.getBirthYear());
console.log(person1.getFullName());
// when we toggle this function with console.log() as we did it before it still will work
// just these method wont showing in the object list

// in es6 the classes were added to javascript(should use this way due to easy to create and more ogranised)
class Person{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName; 
        this.lastName = lastName;    
        this.dob = new Date(dob); 
    }

    getBirthYear()
    {
        return this.dob.getFullYear();
    }

    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
// the instantiate object part are same with es5

