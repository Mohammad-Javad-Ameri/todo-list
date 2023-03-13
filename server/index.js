const express = require("express")
const connectDB = require("./db/connect");
const dotenv = require("dotenv").config()
const cors = require("cors");
const Logger = require("../server/middleWare/Logger")
const port = process.env.PORT || 5000

const app = express()

const todoItemRoute = require("../server/routes/todoItems")
app.use(cors(),Logger,express.json(),express.urlencoded({ extended: true }));

app.use("/item", todoItemRoute);
const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECT);
    console.log("db connect");
    app.listen(port, () => {
      console.log("The server running on port:", port);
    });
  } catch (error) {
    console.log(error);
  }
};


start();



