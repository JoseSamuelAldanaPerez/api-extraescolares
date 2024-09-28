const actividadesService = require('../services/extraescolares.service');

// Diego
const getActividades = (req, res) => {
  // solo obtener las actividades con el servicio y devolverlas con status 200
};

// Diego
const getActividad = (req, res) => {
  // obtener el id de los parametros y usar el servicio
  // status 200 si se encontro
  // status 404 sino
};

// Brian
const postActividad = (req, res) => {
  // obtener la actividad a crear del req.body y usar el servicio
  // status 201 si se creo
  // status 400 si ya existia una actividad con el id
};

// Omar
const putActividad = (req, res) => {
  // obtener el id de los paramtros
  // obtener la actividad actualizada del req.body y usar el servicio
  // status 200 si se actualizo
  // status 404 si no se encontro con el id
};

// req: request, objeto con los datos de la solicitud
// res: response, objeto para responser al cliente
const deleteActividad = (req, res) => {
  // Obtener el parametro id (/:id) de la solicitud
  const id = Number(req.params.id);
  // usar el servicio
  const eliminado = actividadesService.eliminar(id);

  if (eliminado) {
    // 200 ok
    res.status(200).json({ mensaje: 'Actividad eliminada con éxito' });
  } else {
    // 404 error not found
    res
      .status(404)
      .json({ mensaje: 'No se pudo encontrar la actividad con id ' + id });
  }
};

module.exports = {
  getActividades,
  getActividad,
  postActividad,
  putActividad,
  deleteActividad,
};
