var http = require('http');
var fs = require('fs');

function handler(req, res) {

    switch (req.url) {
        case '/books':
            res.write("Books page");
            break;
        case '/products':
             var content = fs.readFileSync("products.html");
            res.write(content.toString());
            break;
        case '/authors':
            res.write("List of authors");
            break;
        default:
            var content = fs.readFileSync("index.html");
            res.write(content.toString());
            break;
    }
    res.end();
}


var server = http.createServer(handler);

server.listen(3000);

console.log("Server running on port 3000");