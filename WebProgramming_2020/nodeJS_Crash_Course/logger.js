const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4()); // version 4 will generate a certain patten of the id

class Logger extends EventEmitter
{
    log(msg)
    {
        // call event this method called this.emit()
        this.emit('message', {id: uuid.v4(), msg}); // everytime we called log it will show a message with id
    }
}

module.exports = Logger;

//console.log('Hello From Node.js...')
// node index.js this will print out the return in terminal(no need .js)
// mutiple file for medule

//const person = require('./person'); // put path in there ./ means current folder

//console.log(person.name);

//import Person from './person'; // node index will give error

// const Person = require('./person'); // import classs//this called common js

// const person1 = new Person('John Doe', 30); // instanciate object with class

// person1.greeting();

const Logger = require('./logger'); // commmonjs and es6 are different

const logger = new Logger();// logger is a class so we need to instantiate

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
// show new id with new message