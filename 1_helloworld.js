var express = require('express')
    var app = express()
    app.get('/home', function(req, res) { //responds with callback function when /home accessed
      res.end('Hello World!')
    })
    app.listen(process.argv[2]); //port number provided
    
/*Notes
Challenge: Create an Express.js app that outputs "Hello World!"
when somebody goes to /home. The port number will be provided to 
you by expressworks as the first argument of the application, 
ie. process.argv[2].
*/