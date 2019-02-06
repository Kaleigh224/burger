var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view enginge", "handlebars");

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;

        res.render("index");
    });
});



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});