// import of express ///
const express = require('express');
const app = express();
// import mongoose //
const mongoose =  require('mongoose');

const routes = require("./routes/webRoutes");

// using of static files //
app.use(express.static('public'));

// set view engine //
app.set('view engine', 'ejs');

app.use(express.json());


app.use(express.urlencoded({extended: false}))

// mongoDB connection //
mongoose.connect('mongodb://localhost:27017/test')
.then((res) =>{
  console.log("Database connected")
})
.catch((err) =>{
  console.log("Oops! failed to connect" + err);
})


// using of routes //
app.use(routes);


// PORT: 3000 //
app.listen("3000", () =>{
  console.log("Server connected")
});