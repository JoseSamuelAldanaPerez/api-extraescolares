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
  // leer actividades de databaseUtils.read, buscar una actividad con id igual a actividad.id
  let actividades = databaseUtils.read('actividades') || [];
  const actividadExistente = actividades.find(act => act.id === actividad.id);

  // si se encuentra, retornar null porque ya existe
  if (actividadExistente) {
    return null;
  }

  // sino, insertar en el arreglo la nueva actividad y guardarla con databaseUtils
  actividades.push(actividad);
  databaseUtils.write('actividades', actividades);

  // retornar actividad
  return actividad;
}

/**
 * Actualizar una actividad extraescolar por ID
 * @param {number} id
 * @param {object} actividad objeto con los nuevos datos
 * @returns {object|null} objeto de la actividad actualizada o null si no se encuentra
 */
function editar(id, actividad) {
  // Implementation goes here
}
function editar(id, actividad) {
  // leer actividades de datababaseUtils.read, buscar una actividad con id igual a id
  // si no se encuentra, retornar null porque no existe
  // si existe, reemplazar todas las propiedades de la actividad encontrada por las del parametro actividad
  // menos actividad.id
  // reemplazar la actividad encontrada por la actualizada y guardarlas con databaseUtils.write
  // retornar actvidad actualizada

 // Leer las actividades de la base de datos
 let actividades = databaseUtils.read('actividades') || [];

 //Busca el Index y condiciona de que sea igual al index que se le paso por parametro
 let searchIndex = actividades.findIndex((search) => search.id === id);

 //Si el index no existe, lo retorna null y si existe, lo actualiza
 if(searchIndex === -1){
    return null;
 }

 actividades[searchIndex] = {... actividades[searchIndex], ...actividad, id};
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

  // Filtrar las actividades que no tengan el ID que se quiere eliminar
  actividades = actividades.filter(function (actividad) {
    if (actividad.id === id) {
      // se encontro la actividad con el ID, no debe guardarse
      eliminado = true;
      return false;
    }
    return true;
  });
  // Guardar el nuevo arreglo de actividades
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
