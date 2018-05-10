var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false})); //non-complex queries

app.post('/form', function(req, res) {
     res.send(req.body.str.split('').reverse().join('')); //server response
});

app.listen(process.argv[2] || 3000); //use specified port or port 3000

/*notes:
split will create an array, reverse will reverse the order and join will convert back to a string.

Challenge: Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.

To handle POST request use the post() method which is used the same way as get():

    app.post('/path', function(req, res){...})

Express.js uses middleware to provide extra functionality to your web server.

Simply put, a middleware is a function invoked by Express.js before your own
request handler.

Middlewares provide a large variety of functionalities such as logging, serving
static files and error handling.

A middleware is added by calling use() on the application and passing the
middleware as a parameter.

To parse x-www-form-urlencoded request bodies Express.js can use urlencoded()
middleware from the body-parser module.
*/