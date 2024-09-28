const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, 'db.json');

/**
 * Obtener el contenido de una propiedad del archivo db.json
 * @param {string} key nombre de la propiedad
 * @returns {any} el valor correspondiente a la propiedad
 */
function read(key) {
  let data = fs.readFileSync(filePath);
  data = JSON.parse(data);
  return data[key];
}

/**
 * Sobrescribir el contenido de una propiedad del archivo db.json
 * @param {string} key nombre de la propiedad
 * @param {any} value nuevo contenido para la propiedad
 */
function write(key, value) {
  let data = fs.readFileSync(filePath);
  data = JSON.parse(data);
  data[key] = value;
  fs.writeFileSync(filePath, JSON.stringify(data));
}

module.exports = { read, write };
