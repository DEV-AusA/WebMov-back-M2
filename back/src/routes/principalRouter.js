const { Router } = require("express");

const { principalController } = require("../controllers/principalController");
const { moviesRouter } = require("./moviesRouter");
const { directorsRouter } = require("./directorsRouter");
const { genresRouter } = require("./genresRouter");

const routerPrincipal = Router();

routerPrincipal.get("/", principalController);
//creo y derivo 1 enrutador para cada entidad, del principalRouter a su EndPoint declarado
routerPrincipal.use("/movies", moviesRouter);
// ejem 2
routerPrincipal.use("/directors", directorsRouter);
routerPrincipal.use("/genres", genresRouter);

module.exports = {
    routerPrincipal
};