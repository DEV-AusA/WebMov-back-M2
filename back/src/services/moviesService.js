const { Movie } = require("../models/Movie");
const { Director } = require("../models/Director");
const { Genre } = require("../models/Genre");

module.exports = {
    // declaro la propiedad getMoviesAPI y retorno las movies
    getMovies: async () => {
      // .populate() muestra el dato de la referencia del Id
      const movies = await Movie.find()
      .populate("director")
      .populate("genre");
      return movies;
    },
    getMovieById: async (id) => {

      const movie = await Movie.findById(id);
      return movie;
    },
    findMovieByName: async (title) => {

      const movie = await Movie.findOne({title});
      return movie;
    },
    createMovie: async (objectMovie) => {
      
      const { title, year, duration, rate, poster, overview, adult, backdrop_path, original_language, video} = objectMovie;
      // verifica y crea la movie si no existe
      await Movie.findOneAndUpdate(
        { title, year }, // condiciones de busqueda
        { $setOnInsert: { title, year, duration, rate, poster, overview, adult, backdrop_path, original_language, video } }, // datos a insertar si no se encuentra
        { upsert: true, new: true } // upsert para insertar si no se encuentra, new para devolver el documento modificado
      );
      // busco la movie a cargar el director y los genres
      const movie = await Movie.findOne({title});

      // verifica y crea al director en otra coleccion
      const { director } = objectMovie;
      await Director.findOneAndUpdate(
        { director },
        { $setOnInsert: { director } },
        { upsert: true, new: true }
      );
      // verifica y crea el genero si no existe en otra coleccion tambien carga los ids a la movie
      const { genres } = objectMovie;     
      for (const genre of genres) {
        await Genre.findOneAndUpdate(
          { genre },
          { $setOnInsert: { genre } },
          { upsert: true, new: true }
        );
        const gen = await Genre.findOne({genre});
        movie.genre.push(gen._id);
      };
      // cargo la id del director recien creado a la nueva movie creada
      const dir = await Director.findOne({director});
      movie.director = dir._id;
      // guardo la movie
      await movie.save();
    },
    addDirector: async (objectData) => {
      const { title, director } = objectData;     
      await Director.findOneAndUpdate(
        { director },
        { $setOnInsert: { director } },
        { upsert: true, new: true }
        );

      const movie = await Movie.findOne({title});
      const dir = await Director.findOne({director});
      // cardo el valor a la propiedad movie.director
      movie.director = dir._id;
      // save cambios
      await movie.save();
    },
    addDuration: async (durationObject) => {
      const { title, duration } = durationObject;
      const movie = await Movie.findOne({title});
      // cardo el valor a la propiedad movie.director
      movie.duration = duration;
      // save cambios
      await movie.save();
    },
    addGenre: async (objectData) => {
      const { movieId, genreId } = objectData;
      const movie = await Movie.findById(movieId);
      // cardo el valor a la propiedad movie.director
      movie.genres_id.push(genreId);
      // save cambios
      await movie.save();
    },
    deleteMovie: async (title) => {
      // .findOneAndDelete TIENE QUE RECIBIR un OBJECT
      await Movie.findOneAndDelete({ title });
    }
};