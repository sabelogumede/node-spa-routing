var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('<h1>Homepage</h1><div>This is homepage</div>');
    // response.sendFile(__dirname + '/index.html');
});

app.get('/about', function(request, response){
    response.sendFile(__dirname + '/about.html');
});

app.get('/contact', function(request, response){
    response.sendFile(__dirname + '/contact.html');
});

app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000');
});
