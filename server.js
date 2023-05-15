const express = require('express');
const mongoose = require('mongoose');

//invoking express by using (const app).
const app = express();
//create a port for run the application.
const PORT = 8000;

//Create database connection.
const DB_URL = ''

//Write database connection's functioanality.
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUndefineTopology:true

})
.then(() => {
    console.log('DataBase Connected');

})
.catch((err) => console.log('DataBase connectoion error', err));

//create a call back function. 
app.listen(PORT, () =>{
  console.log('App is running on ${PORT}');

});