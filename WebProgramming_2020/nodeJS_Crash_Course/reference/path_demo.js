const path = require('path');// bring in the module and this is the core module

// using path mod
// base file name
console.log(__filename);//double under score give full path 
console.log(path.basename(__filename));// give less information only the file name

// directory name
console.log((__filename));
console.log(path.dirname(__filename)); // path_demo.js

// file extension
console.log(path.extname(__filename)); // .js

// create path object
console.log(path.parse(__filename).base); // return a object and we can access this as property .base //'path_demo.js'

// concatenate paths
../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html')); //work well with delimiter