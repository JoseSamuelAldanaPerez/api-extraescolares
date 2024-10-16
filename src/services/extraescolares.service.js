const databaseUtils = require('../database/utils');

/**
 * Obtener todas las actividades extraescolares
 * @returns {Array<object>} arreglo de actividades
 */
function obtenerTodo() {
  return databaseUtils.read('actividades') || [];
}

/**
 * Obtener una actividad extraescolar por ID
 * @param {number} id
 * @returns {object|null} objeto de la actividad o null si no se encuentra
 */
function obtenerPorID(id) {
  let actividades = databaseUtils.read('actividades') || [];
  const actividadEncontrada = actividades.find(function (actividad) {
    return actividad.id === id;
  });

  return actividadEncontrada || null;
}

/**
 * Inserta una nueva actividad extraescolar
 * @param {object} actividad
 * @returns {object|null} objeto de la actividad creada o null si ya existe
 */
function crear(actividad) {
  let actividades = databaseUtils.read('actividades') || [];
  const actividadExistente = actividades.find((act) => act.id === actividad.id);

  if (actividadExistente) return null;
  actividades.push(actividad);
  databaseUtils.write('actividades', actividades);

  return actividad;
}

/**
 * Actualizar una actividad extraescolar por ID
 * @param {number} id
 * @param {object} actividad objeto con los nuevos datos
 * @returns {object|null} objeto de la actividad actualizada o null si no se encuentra
 */
function editar(id, actividad) {
  let actividades = databaseUtils.read('actividades') || [];
  let searchIndex = actividades.findIndex((search) => search.id === id);

  if (searchIndex === -1) return null;
  actividades[searchIndex] = { ...actividades[searchIndex], ...actividad, id };
  databaseUtils.write('actividades', actividades);

  return actividades[searchIndex];
}

/**
 * Eliminar una actividad extraescolar por ID
 * @param {number} id
 * @returns {boolean} true si se eliminó algo
 */
function eliminar(id) {
  // Obtener el arreglo de actividades, si no existe se asigna un arreglo vacio []
  let actividades = databaseUtils.read('actividades') || [];
  let eliminado = false;

  actividades = actividades.filter(function (actividad) {
    if (actividad.id === id) {
      eliminado = true;
      return false;
    }
    return true;
  });
  databaseUtils.write('actividades', actividades);

  return eliminado;
}

module.exports = {
  obtenerTodo,
  obtenerPorID,
  crear,
  editar,
  eliminar,
};
