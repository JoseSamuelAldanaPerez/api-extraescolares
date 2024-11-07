const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => {
      console.error('Error al conectarse con la base de datos: ', error);
      process.exit(1);
    });
};

module.exports = connectToDB;
