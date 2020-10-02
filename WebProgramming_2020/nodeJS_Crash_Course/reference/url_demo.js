const url = require('url');  // this is import the funciton models each model do has different function just like the command tree in c sharp

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); // those two return the same thing

// host (root domain)
console.log(myUrl.host);

// host name
console.log(myUrl.hostname); // hostname does not include the port

// pathname
console.log(myUrl.pathname); //the html name

// serialized query
console.log(myUrl.search); // everything after the question mark

// params object
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append('abc', '123');

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));