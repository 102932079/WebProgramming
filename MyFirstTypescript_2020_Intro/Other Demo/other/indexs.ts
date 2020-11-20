//The set up enviorment before use typescript

//before use typescript install nodejs nodejs.org (nodejs setup) nodejs on its own is small 
//nodejs is a cross-platform way of running javascirpt on machine it able to run many way with many option of language
//another thing we need here is node package manager (npmjs) www.npmjs.com libary of code
//bootstrap framwork of node npm (npm i bootstrap)
//install the nodejs on cmd (only in terminal no GUI)
//node -v (check version) node is javascript runtime allow to excute javascript code on brower
//typescript owned by microsoft and openscource
//via npm to install ts
//npm -v (check typescript version)
//npm install -g typescript(install typescript -g global)
//when we building up typescript we need translate the ts into js to became excutiable for the machine
//tsc command to convert(need unlock the limit before use see the two screenshot in folder)
//tsc index.ts(this command will generate a js file)

let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null) {
    alert("Button not found.");
} else {
    
    myButton.onclick = function () {
        if(myButton == undefined) return;
        alert("Hello World!");
    }
}

// Fun fact! Typescript allows you to programing in an "OOP" (Object orientated programing ) format! Well, sorta...

// I do want to warn you now, DO NOT MIX UP C# classes with Typescript classes. They are implemented completely differently, yet typescript does its best to emulate how C# does it. Keep a keen eye on the difference of syntax!

//Typescript classes

class Person
{
    name: string;
    age: number;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    printPerson()
    {
        console.log(`name:${this.name}, age:${this.age}`)
    }
}

//JavaScript's implementation of a class:

var Person = /**@class */ (function()
{
    function Person(name, age)
    {
        this.name = name;
        this.age = age;
    }

    Person.prototype.printPerson = function ()
    {
        console.log(`name:${this.name}, age:${this.age}`);
    };
    return Person;
});

//Notice some funky stuff going on here? JavaScript does not nativity support "classes", instead everything and anything is represented as an "object", which can have attributes (variables / properties) and functions (actions / methods); JavaScript uses what is called a "prototype" for its objects. Its a little / a lot confusing to understand, but if you want more information regarding this, have a read up here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes (Links to an external site.)

//For our use case, all we need to know is that when we define a "class" in typescript, it does all the magic and converts our code into the JavaScript mayhem that exists today.

class Person{
    name: string;
    age: number;

    private gender: boolean;

    constructor(name:string, age: number, gender: boolean)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printPerson()
    {
        console.log(`name:${this.name}, age:${this.age}`);
    }

    getGender(): string
    {
        if (this.gender)
        {
            return "Female";

        }
        return "Male"
    }

    getLowerCaseName()
    {
        return this.name.toLocaleLowerCase();
    }
}

//Couple of things to take note from the above screenshot:

// attributes must be typed
// attributes and functions are defaulted to public (not private like c#)
// functions do not need a return type, however it is recommended
// the "this" keyword is a requirement to access attributes / functions on the current instance of the class
// This is a limitation of the Javascript language
// private attributes can be defined, however NOTHING in JavaScript is private EVER. It is always accessible, however typescript will throw an "error" if you try and access the value.
// Have a bit of a read more from here: https://www.typescriptlang.org/docs/handbook/classes.html