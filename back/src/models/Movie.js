const mongoose = require("mongoose");

// creo el Schema
// creo una variable para instanciar un nuevo Schema de la clase moongose
const movieSchema = new mongoose.Schema({
    // declaro el nombre de las propiedades del nuevo schema y declaro como value el TIPO DE DATO
    title: String,
    year: String,
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director"
    },
    duration: String,
    genre: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    }],
    rate: Number,
    poster: String,
    overview: String,
    adult: Boolean,
    backdrop_path: String,
    original_language: String
    // video: Boolean,
});

// creo el Model
//  creo el modelo en base al schema creado
const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
    Movie
}