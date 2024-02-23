module.exports = {
    validateAddDuration: (req, res, next) => {
        const { title, duration } = req.body;

        if (!title || typeof title !== "string" || !duration || typeof duration !== "string") {
            throw new Error("Validando AddDuration: Falta algun dato o los datos ingresados son incorrectos")
        }
        else{
            next();
        };
    }
};