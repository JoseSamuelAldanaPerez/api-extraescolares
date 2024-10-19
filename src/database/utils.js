const fs = require('node:fs');
const path = require('node:path');
const { NODE_ENV } = process.env;

const fileName = NODE_ENV === 'test' ? 'db-test.json' : 'db.json';
const filePath = path.join(__dirname, fileName);

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
