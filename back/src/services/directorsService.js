const { Director } = require("../models/Director")

module.exports = {
    getDirectors: async () => {
        const directors = await Director.find();
        return directors;
    },
    createDirector: async (director) => {
        await Director.create(director);
    }
};