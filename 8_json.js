var express = require('express');
var fs = require('fs');

var app = express();
app.get('/books', function(req, res){ //'/books' resource path
    var filename = process.argv[3];
    fs.readFile(filename, function(err, data){
        if (err) {
            return res.sendStatus(500);
        }
        res.json(JSON.parse(data));
        
    });
});

app.listen(process.argv[2]);

/*Challenge: Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in process.argv[2].  The file name is passed in process.argv[3].

Respond with:

    res.json(object)

Everything should match the '/books' resource path.

For reading, there's an fs module, e.g.,

    fs.readFile(filename, callback)

While the parsing can be done with JSON.parse:

    object = JSON.parse(string)
*/