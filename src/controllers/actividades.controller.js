const actividadesService = require('../services/actividades.service');

const getActividades = async (req, res) => {
  const actividades = await actividadesService.obtenerTodo();
  res.status(200).json(actividades);
};

const getActividad = async (req, res) => {
  const id = req.params.id;
  const actividad = await actividadesService.obtenerPorID(id);

  if (actividad) res.status(200).json(actividad);
  else
    res.status(404).json({ mensaje: 'Actividad no encontrada con id ' + id });
};

const postActividad = async (req, res) => {
  const nuevaActividad = req.body;
  const resultado = await actividadesService.crear(nuevaActividad);

  if (resultado)
    res.status(201).json({
      mensaje: 'Actividad creada con éxito',
      actividad: resultado,
    });
  else
    res.status(400).json({
      mensaje: 'No se pudo crear la actividad. Los datos son inválidos.',
    });
};

const putActividad = async (req, res) => {
  const id = req.params.id;
  const actividadActualizada = req.body;
  const resultado = await actividadesService.editar(id, actividadActualizada);

  if (resultado)
    res.status(200).json({
      mensaje: `Actividad actualizada con éxito`,
      actividad: resultado,
    });
  else
    res.status(404).json({ mensaje: `Actividad no encontrada con id ${id}` });
};

const deleteActividad = async (req, res) => {
  const id = Number(req.params.id);
  const eliminado = await actividadesService.eliminar(id);

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
