// module warpper function
// (function (exports, require, module, _filename, _dirname)
// {

// })

// console.log(_dirname, _filename);
//return two path 

// demo for inport a class
class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    greeting()
    {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
module.experts = Person;    

//demo for inport a variable
// const person =
// {
//     name: 'John Doe',
//     age: 30
// }

// module.experts = person;    