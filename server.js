var http = require("http");
var fs = require("fs");



function Server(port, classification) {
  this.server = http.createServer(classification);
  this.server.listen(port, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Server listening on: http://localhost:%s", port);

  });


}

function friendFinder(request, response) {

  fs.readFile(__dirname + "\app\public\home.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}


var ffServer = new Server("8080", friendFinder);