// Import Dependencies
const mongoose = require("./connection")

// Our Models
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;

// Make Movie Schema
const movieSchema = new Schema({
    title: { type: String, required: true },
    releaseDate: String,
    length: Number,
    genre: String,
    poster: { type: String, required: true },
    director: { type: String, required: true },
    rating: String,
    watchAgain: Boolean,
    cast: [{ type: String }]
});

// Make Movie Model
const Movie = model("Movie", movieSchema);

// Export Model
module.exports = Movie