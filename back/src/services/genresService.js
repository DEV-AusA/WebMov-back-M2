const { Genre } = require("../models/Genre")

module.exports = {
    getGenres: async () => {
        const genres = await Genre.find();
        return genres;
    },
    createGenre: async (dataGenre) => {
        const genre = await Genre.create(dataGenre);
        return genre;
    }
};