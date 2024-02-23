const { Router } = require("express");

const genresController = require("../controllers/genresController");
const validateGenre = require("../../middlewares/validateGenre");

const genresRouter = Router();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.post("/", validateGenre.validateGenre, genresController.createNewGenre);

module.exports = {
    genresRouter
}