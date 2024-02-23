const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { routerPrincipal } = require("./routes/principalRouter");

const app = express();

// los middlewares se declaran antes de que la peticion vaya al router

// deja registro/consologuea el tipo de solicitud y el tiempo que tardo en responder
app.use(morgan("dev"));
// filtra y rechaza peticiones que no son del puerto
app.use(cors());
// convierte JSON a JS
app.use(express.json());

// despeus de pasar todos los middlewares redirecciona la solicitud al enrutador Principal
app.use(routerPrincipal);

module.exports = {
    app
};