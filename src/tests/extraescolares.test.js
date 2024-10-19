const supertest = require('supertest');
const { app, server } = require('../index');
const databaseUtils = require('../database/utils');

const api = supertest(app);
const API_URL = '/api/extraescolares';

// Diego
describe('Test endpoint GET', () => {
  // 1. probar que GET devuelva un 200 OK
  test('Obtener todas las actividades correctamente', async () => {});

  // 2. probar que GET /1 devuelva un 200 OK, pues la BD de pruebas solo tiene esa actividad
  test('Obtener una actividad existent correctamente', async () => {});

  // 3. probar que GET /2 devuelva un error 404, pues no existe esa actividad
  test('Obtener una actividad inexistente debería fallar', async () => {});
});

// Brian
describe('Test endpoint POST', () => {
  // 1. insertar un nuevo elemento y que devuelva 201
  test('Insertar una nueva actividad correctamente', async () => {});

  // 2. insertar un nuevo elemento con ID 1 y devuelva error 400, pues ese ID ya existe
  test('Insertar una actividad con ID repetido debería fallar', async () => {});

  // Nota: usar .send() antes de .expect()
  // dentro de .send() va el objeto de la nueva actividad a insertar
});

// Omar
describe('Test endpoint PUT', () => {
  // 1. actualizar el elemento con id 1 y devuelva 200
  test('Actualizar una actividad existente correctamente', async () => {});

  // 2. actualizar el elemento con id 2 y devuelva error 404, pues no existe esa actividad
  test('Actualizar una actividad inexistente debería fallar', async () => {});

  // Nota: usar .send() antes de .expect()
  // dentro de .send() va el objeto con los nuevos datos de la actividad
});

// Samuel
describe('Test endpoint DELETE', () => {
  // 1. eliminar el elemento con id 1 y devuelva 200
  test('Eliminar una actividad existente correctamente', async () => {
    // await + api.(metodo http) + (url) + .expect(codigo de estado http esperado)
    await api.delete(API_URL + '/1').expect(200);
  });

  // 2. eliminar el elemento con id 2 y devuelva error 404, pues no existe esa actividad
  test('Eliminar una actividad inexistente debería fallar', async () => {
    await api.delete(API_URL + '/2').expect(404);
  });
});

// Antes de cada test, la BD solo tendrá una actividad almacenada
beforeEach(() => {
  const actividadesPrueba = [
    {
      id: 1,
      nombre: 'Ajedrez',
      descripcion:
        'Cuando juegas al ajedrez, tu cerebro tiene el reto de ejercer la lógica, desarrollar el reconocimiento de patrones, tomar decisiones tanto visual como analíticamente y poner a prueba tu memoria.',
      categoria: 'deportiva',
      horas: 2,
      correo: 'ajedrez@leon.tecnm.mx',
    },
  ];
  databaseUtils.write('actividades', actividadesPrueba);
});

// Después de ejecutar todos los tests, borrar las actividades y cerrar el servidor
afterAll(() => {
  databaseUtils.write('actividades', []);
  server.close();
});
