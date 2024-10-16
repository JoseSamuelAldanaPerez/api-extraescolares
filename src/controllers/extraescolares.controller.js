const actividadesService = require('../services/extraescolares.service');

const getActividades = (req, res) => {
  const actividades = actividadesService.obtenerTodo();

  res.status(200).json(actividades);
};

const getActividad = (req, res) => {
  const id = Number(req.params.id);
  const actividad = actividadesService.obtenerPorID(id);

  if (actividad) res.status(200).json(actividad);
  else
    res.status(404).json({ mensaje: 'Actividad no encontrada con id ' + id });
};

const postActividad = (req, res) => {
  const nuevaActividad = req.body;
  const resultado = actividadesService.crear(nuevaActividad);

  if (resultado)
    res.status(201).json({
      mensaje: 'Actividad creada con éxito',
      actividad: resultado,
    });
  else
    res.status(400).json({
      mensaje:
        'No se pudo crear la actividad. El ID ya existe o los datos son inválidos.',
    });
};

const putActividad = (req, res) => {
  const id = Number(req.params.id);
  const actividadActualizada = req.body;
  const resultado = actividadesService.editar(id, actividadActualizada);

  if (resultado)
    res.status(200).json({
      mensaje: `Actividad actualizada con éxito`,
      actividad: resultado,
    });
  else
    res.status(404).json({ mensaje: `Actividad no encontrada con id ${id}` });
};

const deleteActividad = (req, res) => {
  const id = Number(req.params.id);
  const eliminado = actividadesService.eliminar(id);

  if (eliminado)
    res.status(200).json({ mensaje: 'Actividad eliminada con éxito' });
  else
    res
      .status(404)
      .json({ mensaje: 'No se pudo encontrar la actividad con id ' + id });
};

module.exports = {
  getActividades,
  getActividad,
  postActividad,
  putActividad,
  deleteActividad,
};
