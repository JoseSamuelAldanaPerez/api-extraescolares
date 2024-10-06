const actividadesService = require('../services/extraescolares.service');

// Diego
const getActividades = (req, res) => {
  // Obtener todas las actividades usando el servicio
  const actividades = actividadesService.obtenerTodo();

  // Devolver las actividades con estado 200
  res.status(200).json(actividades);
};

// Diego
const getActividad = (req, res) => {
// Obtener el id de los parámetros y convertirlo a número
const id = Number(req.params.id);

// Usar el servicio para obtener la actividad por ID
const actividad = actividadesService.obtenerPorID(id);

if (actividad) {
  // Responder con estado 200 y la actividad si se encontró
  res.status(200).json(actividad);
} else {
  // Responder con estado 404 si no se encontró la actividad
  res.status(404).json({ mensaje: 'Actividad no encontrada con id ' + id });
}
};

// Brian
const postActividad = (req, res) => {
  // Obtener la actividad a crear del req.body
  const nuevaActividad = req.body;

  // Usar el servicio para crear la actividad
  const resultado = actividadesService.crear(nuevaActividad);

  if (resultado.creado) {
    // 201 Created
    res.status(201).json({
      mensaje: 'Actividad creada con éxito',
      actividad: resultado.actividad
    });
  } else {
    // 400 Bad Request
    res.status(400).json({
      mensaje: 'No se pudo crear la actividad. El ID ya existe o los datos son inválidos.'
    });
  }
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
