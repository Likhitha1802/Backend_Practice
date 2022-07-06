var express = require("express");
var app = express();
const myRouter = require("./myRouter");
app.use(express.static("pages"));
app.get('/',myRouter);
app.get('/about',myRouter);
app.listen(3000);