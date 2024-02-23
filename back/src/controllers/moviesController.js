const moviesServices = require("../services/moviesService");

// exporto directamente y que es un objeto
module.exports = {
    // futuraPropiedadMovies: (res, res) => {
    //     res.status(200).send("Futura Propiedad de Movies");
    // }
    getAllMovies: async (req, res) => {        
        try {
            const movies = await moviesServices.getMovies();
            // reemplazo .send por .json asi el response son las movies y no un string
            res.status(200).json(movies);        
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener las peliculas"
            });
        };
    },
    getMovieById: async (req, res) => {
        try {
            // el id destructurado de params
            const { id } = req.params;
            // utilizo la function getUserById(id) de services y le paso como argumento el id de params
            const movie = await moviesServices.getMovieById(id);
            // respondo la solicitud enviandole la movie encontrada
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener la pelicula por ID"
            });
        }
    },
    getMovieByName: async (req, res) => {
        try {
            const { title } = req.body;
            const movie = await moviesServices.findMovieByName(title);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener la peliculas por su Nombre"
            });            
        }
    },
    createNewMovie: async (req, res) =>{

        const movie = req.body;
        try {
            await moviesServices.createMovie(movie); // <= modifico para que reciba un object
            res.status(201).json({
                message: "Pelicula creada correctamente"
            });
        } catch (error) {
            res.status(500).json({
                error: "Hubo un error, Ya existe una pelicula con ese title , no se puede agregar"
            });
        }
    },
    addDirectorMovie: async (req, res) => {
        try {
            const { title, director } =req.body;
            await moviesServices.addDirector({ title, director });
            res.status(200).json( {
                message: "Se agrego correctamente el director a la pelicula"
            });
            
        } catch (error) {
            res.status(500).json({
                error: "Hubo un error al agregar el directo a la pelicula"
            });
        }
    },
    addDurationMovie: async (req, res) => {
        try {
            const { title, duration } =req.body;
            await moviesServices.addDuration({ title, duration });
            res.status(200).json( {
                message: "Se agrego correctamente la duration a la pelicula"
            });
            
        } catch (error) {
            res.status(500).json({
                error: "Hubo un error al agregar la duration a la pelicula"
            });
        }
    },
    addGenreMovie: async (req, res) => {
        try {
            const { movieId, genreId } =req.body;
            await moviesServices.addGenre({ movieId, genreId });
            res.status(200).json( {
                message: "Se agrego correctamente el género a la pelicula"
            });
            
        } catch (error) {
            res.status(500).json({
                error: "Hubo un error al agregar el género a la pelicula"
            });
        }
    },
    deleteMovieByTitle: async (req, res) => {
        try {
            const { title } = req.body;
            await moviesServices.deleteMovie(title);
            res.status(200).json({
                message: `La pelicula ${title} fue borrada exitosamente`
            });            
        } catch (error) {
            res.status(500).json({
                error: `Hubo un error no se pudo borrar la pelicula`
            });
        }
    }
};