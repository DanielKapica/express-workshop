var express = require("express");
var app = express();

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.use(express.static("public"));

app.get('/create-post', function (req, res) {
    res.send('Hello there!');
});
