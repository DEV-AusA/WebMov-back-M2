const { Router } = require("express");

const directorsController = require("../controllers/directorsController");
const validateDirector = require("../../middlewares/validateDirector");

const directorsRouter = Router();

directorsRouter.get("/", directorsController.getAllDirectors);
directorsRouter.post("/", validateDirector.validateDirector, directorsController.createNewDirector);

module.exports = {
    directorsRouter
}