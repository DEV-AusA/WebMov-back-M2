const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateCreateMovie = require("../../middlewares/validateCreateMovie");
const validateAddDirector = require("../../middlewares/validateAddDirector");
const validateAddGenre = require("../../middlewares/validateAddGenre");
const validateAddDuration = require("../../middlewares/validateAddDuration");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.get("/byName", moviesController.getMovieByName);
moviesRouter.get("/:id", moviesController.getMovieById); //&& <== ESTE SIEMPRE VA ULTIMO

// agrego el middleware para validar los datos del POST
moviesRouter.post("/", validateCreateMovie.validateCreaTeNewMovie, moviesController.createNewMovie);

moviesRouter.put("/addDirector", validateAddDirector.validateAddDirector, moviesController.addDirectorMovie);
moviesRouter.put("/addDuration", validateAddDuration.validateAddDuration, moviesController.addDurationMovie);
moviesRouter.put("/addGenre", validateAddGenre.validateAddGenre, moviesController.addGenreMovie);

moviesRouter.delete("/", moviesController.deleteMovieByTitle);

module.exports =  { 
    moviesRouter
};