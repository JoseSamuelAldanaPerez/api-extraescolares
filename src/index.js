const express = require('express');
const morgan = require('morgan');

const extraescolaresRutas = require('./routes/extraescolares.routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/extraescolares', extraescolaresRutas);

const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

module.exports = {
  app,
  server,
};
