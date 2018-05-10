var express = require('express');
var path = require('path');

var app = express();

//call static middleware
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

//listen on the port specified
app.listen(process.argv[2]);

/*Notes
Challenge: Apply static middleware to serve index.html file without any routes.
The index.html file is provided and usable via the path supplied by
process.argv[3].

This is how you can call static middleware:

    app.use(express.static(path.join(__dirname, 'public')));

For this exercise expressworks will pass you the path:

    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
*/