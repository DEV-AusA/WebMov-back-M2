

module.exports = {

    // valido los datos que ingresan en el req.body
    validateCreaTeNewMovie: (req, res, next) => {
        const { title, year, duration, rate, poster, overview, adult, backdrop_path, original_language, video} = req.body;
    
        if (
            !title ||
            !year ||
            !duration ||
            !rate ||
            !poster || 
            !overview || 
            typeof adult !== 'boolean' || 
            !backdrop_path || 
            !original_language
            // typeof video !== 'boolean' || 
            ){
            throw new Error ("Validando validateCreaTeMovie: Falta algun dato o algun dato es incorrecto");
        }
        else{
            next();
        };
    
    },
}