var express = require("express");
var bodyParser = require("body-parser");
var config = require('config.json');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
 app.use(express.static("public"));

 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());

  // Parse request body as JSON
//  app.use(express.urlencoded({ extended: true }));
//  app.use(express.json());

  // Set Handlebars.
 var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");

  // Import routes and give the server access to them.
  require("./controllers/burgers_controllers.js")(app);

//  app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
