const express = require('express');
const morgan = require('morgan');

const extraescolaresRutas = require('./routes/extraescolares.routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/extraescolares', extraescolaresRutas);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
