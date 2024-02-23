const genresService = require("../services/genresService");

module.exports = {
    getAllGenres: async (req, res) => {
        try {
            const genres = await genresService.getGenres();
            res.status(200).json(genres);            
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener todos los géneros"
            });            
        };
    },
    createNewGenre: async (req, res) => {
        try {
            const { genre } = req.body;
            await genresService.createGenre({ genre });
            res.status(200).json({
                message: "El género se creo correctamente"
            });
        } catch (error) {
            res.status(500).json({
                error: "Hubo un error, no se pudo crear el nuevo género"
            });
        };
    }
};