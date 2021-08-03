//Dependecies
const express = require('express'); 
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const registerRoute = require("./routes/registerRoute");


//(2. instatiations)
const app = express(); 

//3. configurations
app.set('view engine', 'pug');
app.set('views', './views');

//mongodb connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// (4. middleware)
//body-parser handles reading data from the form element
app.use(express.urlencoded({extended: true})) 
app.use("/static", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

  //routes
  app.use("/", registerRoute);
  
  //routing
 


  // this helps create a server defining the port, console.log will run whenever you listen to the port
   app.listen(1000, () =>{
      console.log('listening on 1000')
    })