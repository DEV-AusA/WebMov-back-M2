module.exports = {
    validateDirector: (req, res, next) => {
        const { director } = req.body;

        if (!director || typeof director !== "string") {
            throw new Error("Validando director: Falta algun dato o el el dato ingresado es incorrecto")
        }
        else{
            next();
        };
    }
};