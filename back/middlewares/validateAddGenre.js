module.exports = {
    validateAddGenre: (req, res, next) => {
        const { movieId, genreId } = req.body;

        if (!movieId || typeof movieId !== "string" || !genreId || typeof genreId !== "string") {
            throw new Error("Validando AddGenre: Falta algun dato o algun dato ingresado es incorrecto")
        }
        else{
            next();
        };
    }
};