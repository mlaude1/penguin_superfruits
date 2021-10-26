////////////////////////
// import dependencies
////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")


////////////////////////////////////////////////
// Create our Fruits Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const {Schema, model} = mongoose // destructuring Schema and Model from mongoose

// make a fruits schema
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String,
});

// Make the Fruit Model
const Fruit = model("Fruit", fruitsSchema) // the model should always be capitalized and singular

// log the model to make sure it exists
// console.log(Fruit)

////////////////////////
// export the fruit model
////////////////////////

module.exports = Fruit