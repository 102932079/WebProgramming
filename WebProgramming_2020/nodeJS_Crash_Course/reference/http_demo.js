const http = require('http');

// create server object
http.createServer((req, res) =>
{
    // write response
    res.write('Hello World');
    res.end()
}).listen(5000, () => console.log('Server running...'));// () => those called (called back)

// run node http_demo and see in broser localhost: 5000

// crtl + c stop server from running