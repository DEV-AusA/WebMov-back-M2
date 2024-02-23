const { app } = require("./src/server")
const { dbCon } = require("./src/config/dbCon")
const PORT_DB = 3000;

const startServer = async () => {
    try {
        // espero que se complete la conexxion con el servidor DB
        await dbCon();
        // si todo salio bien levanto el servidor
        app.listen(PORT_DB, () =>{
            console.log(`Servidor ON: recibiendo peticiones por el puerto ${PORT_DB}`);
        });
    } catch (error) {
        throw new Error("Error no se pudo conectar con la DB");
    }
};

// inicio conexion con DB y seguido el servidor
startServer();