var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

//nom install body-parser --save
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//We can test this using POSTman and send information as application/x-www-form-urlencoded
app.post( '/', function( req, res) {
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    console.log(latitude + ',' + longitude);
    res.send(latitude + ',' + longitude);
})

//For easy testing
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);
