// Import Dependencies
const mongoose = require("./connection");

// Define Model
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make User Schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Make User Model
const User = model("User", userSchema);

// Export Model
module.exports = User;