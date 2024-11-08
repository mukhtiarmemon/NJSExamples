var express = require('express');
var app = express();

function homefunction (req, res) {
   res.send("Hello world! from Express");
}

app.get('/homee', homefunction);
app.listen(1000);