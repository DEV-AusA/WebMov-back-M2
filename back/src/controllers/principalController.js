
// ESTE ARCHIVO YA NO ES NECESARIO lo dejo para recordar la estructura de la demo
const principalController = (req, res) =>{
    res.status(200).json({
        message: "Controlador Principal activo: ACA NO HAY NADA DE PELICULAS"
    });
}

module.exports = {
    principalController
};