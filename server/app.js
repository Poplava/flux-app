var express = require('express');
var app = express();

app.use(express.static('app'));

app.get('/', function(req, res) {
    res.render('app/index.html');
});

var server = app.listen(3000, function() {
    console.log('app starts');
});
