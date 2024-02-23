const directorsService = require("../services/directorsService");

module.exports = {
    getAllDirectors: async (req, res) => {
        try {
            const directors = await directorsService.getDirectors();
            res.status(200).json(directors);            
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener todos los directores"
            });            
        };
    },
    createNewDirector: async (req, res) => {
        try {
            const { director } = req.body;
            await directorsService.createDirector({ director });
            res.status(200).json({
                message: "El director se creo correctamente"
            });
        } catch (error) {
            res.status(500).json({
                error: "Hubo un error, no se pudo crear el nuevo director"
            });
        };
    }
};