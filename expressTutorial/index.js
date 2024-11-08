var express = require('express');
var app = express();

app.all('/hello', function(req, res){
   res.send("Hello World!");
});
app.listen(3000);