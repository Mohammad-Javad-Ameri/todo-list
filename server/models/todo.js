const mongoose = require("mongoose");

const { Schema, model } = mongoose;


const todoSchema = new Schema({
    item:{
    type: String,
    require: true  
  }
})

module.exports = model("item", todoSchema);