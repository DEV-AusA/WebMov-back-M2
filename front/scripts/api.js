const axios = require("axios");

const fetchMovies = async () => {
    try {
        //uso DB local con Mongoose
        const dataApi = await axios.get('http://localhost:3000/movies');
        return dataApi.data
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    fetchMovies
};