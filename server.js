// Dependencies
// ==============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// Sets up the Express App
// ==============================================================
var app = express();
// var PORT = 3000;

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Starts the server to begin listening
// ==============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



// //routes to the servey page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });

// app.get("/servey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/puplic/survey.html"));
//     });

