module.exports = {
    validateAddDirector: (req, res, next) => {
        const { title, director } = req.body;

        if (!title || typeof title !== "string" || !director || typeof director !== "string") {
            throw new Error("Validando AddDirector: Falta algun dato o los datos ingresados son incorrectos")
        }
        else{
            next();
        };
    }
};