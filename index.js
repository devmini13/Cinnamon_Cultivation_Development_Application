const express = require("express");
const mongoose = require("mongoose");
//invoking express by using (const app).
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

//Create a Middleware for interact the request before going response (app middleware).
app.use(bodyParser.json());

//Import routes.
const StateOwnerRegRoutes = require('./routes/StateOwnerReg');

//use cors as middleware
app.use(cors());

//pass how the routes want to communicate the server(route middleware)
app.use(StateOwnerRegRoutes)


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running Application Successfully..!");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Successfully Connected"))
  .catch((error) => console.log(error));

app.use("/auth", require("./routes/UserLogin"));

const port = process.env.PORT || 8100;

app.listen(port, () => {
  console.log(`Server Running on Port - ${port}`);
});