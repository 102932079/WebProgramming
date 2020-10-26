const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req. res) => 
{
    //for css and img this is not going to work
    //console.log(req.url); we can see what url is called /about
    // if(req.url === '/about') // rest api fetch data from database
    // {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>
    //     {
    //         if (err) throw err;
    //         res.writeHead(200, {'Contect-Type':'text/html' });
    //         //res.end('<h1>HOME</h1>'); 
    //         res.end(content);//output the content of the file
    //     })
    //     // put content here , the content here is what to showing in the webpage
    //     // if i change the content here it does not change the webpage until i manully restart the server
    //     // we can use the nodemon index here (but need to install it globly)
    //     //npm run dev // auto watching // nodemon is the great tool
    // }

    // if(req.url === '/api/users') // json 200 respond json content
    // {
    //     const users = [
    //         {name: 'Bob Smith', age: 40 },
    //         {name: 'John Doe', age: 30 },
    //     ];
    //     res.writeHead(200, { ' Content-Type: 'application/json'});
    //     res.end(JSOn.stringify(users));
    // }

    // build file path 
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url); // ? then : else

    // console.log(filePath);
    // res.end();

    // extension of file
    let extname = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';
    switch(extname)
    {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) =>
    {
        if (err)// looking for certain error type
        {
            if (err.code == 'EN0ENT') // page not found
            {
                // load an error page
                fs.readFile(path.join(__dirname, 'public'. '404.html'), (err, content) =>
                {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }
            else{
                // some server error (500)
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else
        {
            // success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000; // create a  port tring 5000 first

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));// variable port number

