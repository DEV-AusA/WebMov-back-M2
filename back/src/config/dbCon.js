const mongoose = require("mongoose");

require("dotenv").config();

const dbCon = async () => {
    // realizar la conexion con la BD
    await mongoose.connect(process.env.MONGO_URI);
};

module.exports = {
    dbCon
}