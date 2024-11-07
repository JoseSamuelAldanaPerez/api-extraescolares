const Actividad = require('../models/Actividad');

const obtenerTodo = async () => {
  try {
    const actividades = await Actividad.find({});
    return actividades;
  } catch (error) {
    return [];
  }
};

const obtenerPorID = async (id) => {
  try {
    const actividad = await Actividad.findById(id);
    return actividad;
  } catch (error) {
    return null;
  }
};

const crear = async (actividad) => {
  try {
    const nuevaActividad = new Actividad({ ...actividad });
    const actividadGuardada = await nuevaActividad.save();
    return actividadGuardada;
  } catch (error) {
    return null;
  }
};

const editar = async (id, actividad) => {
  try {
    const actividadActualizada = await Actividad.findOneAndUpdate(
      { _id: id },
      actividad,
      { new: true }
    );
    return actividadActualizada;
  } catch (error) {
    return null;
  }
};

const eliminar = async (id) => {
  try {
    const actividad = await Actividad.findByIdAndDelete(
      { _id: id },
      { new: true }
    );
    return !!actividad;
  } catch (error) {
    return false;
  }
};

module.exports = {
  obtenerTodo,
  obtenerPorID,
  crear,
  editar,
  eliminar,
};
