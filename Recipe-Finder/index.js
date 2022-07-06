var express = require("express");
var app  = express();
const myRouter = require('./myRouter');
app.use(express.static('pages'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get('/',myRouter);
app.post('/postingdata',myRouter);
app.listen(4000);