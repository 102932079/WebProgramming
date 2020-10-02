const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => // function(err) = (err) => this called function arrow es6 // beacuse only one parameter so we dont need pantasis 
// {
//     if(err) throw err;
//     console.log('Folder created...')
// });
//return folder crated

// create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => 
{
    if(err) throw err;
    console.log('File written to...');
});

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', err => 
{
    if(err) throw err;
    console.log('File written to...');
});
// if we run the two write file together it will over write the hello world with i love node.js

// file append
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => 
{
    if(err) throw err;
    console.log('File written to...');
    // file append here
        fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', err => 
    {
        if(err) throw err;
        console.log('File written to...');
    });
});
//both text will exist // the file will add hello world and in the call back the file will add file append

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>  // utf8 very important here // make the read info into data
{
    if(err) throw err;
    console.log(data);//when we can use this data later
});

//rename the file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) =>  // possiable error
{// rename hello.txt to helloworld.txt
    if(err) throw err;
    console.log('File renamed...');
});