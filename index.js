const express = require("express"),
    app = express(),
    settings = require("./config"),
    path = require("path");

app.set('view engine', 'twig');

//load assets
app.use("/assets", express.static(path.resolve(__dirname, "./public")));

//routes
app.all("/", (req, res) => res.render("index"));

//start serveur sur les settings port
app.listen(settings.port, error => {
    if (error) return console.error(error)
    console.log('Server online');
});
