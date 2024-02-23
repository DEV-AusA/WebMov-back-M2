module.exports = {
    validateGenre: (req, res, next) => {
        const { genre } = req.body;

        if (!genre || typeof genre !== "string") {
            throw new Error("Validando genero: Falta algun dato o el el dato ingresado es incorrecto")
        }
        else{
            next();
        };
    }
};