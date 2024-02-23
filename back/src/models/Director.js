const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
    director: String    
});

const Director = mongoose.model("Director", directorSchema);

module.exports = {
    Director
}