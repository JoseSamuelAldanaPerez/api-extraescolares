const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const connectToDB = require('./database/config');
const extraescolaresRutas = require('./routes/extraescolares.routes');
const actividadesRutas = require('./routes/actividades.routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/extraescolares', extraescolaresRutas);
app.use('/api/v2/extraescolares', actividadesRutas);

const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

module.exports = {
  app,
  server,
};
