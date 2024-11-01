const supertest = require('supertest');
const { app, server } = require('../index');
const databaseUtils = require('../database/utils');

const api = supertest(app);
const API_URL = '/api/extraescolares';

describe('Test endpoint GET', () => {
  test('Obtener todas las actividades correctamente', async () => {
    await api.get(API_URL).expect(200).expect('Content-Type', /json/);
  });

  test('Obtener una actividad existent correctamente', async () => {
    await api.get(`${API_URL}/1`).expect(200).expect('Content-Type', /json/);
  });

  test('Obtener una actividad inexistente debería fallar', async () => {
    await api.get(`${API_URL}/2`).expect(404);
  });
});

describe('Test endpoint POST', () => {
  test('Insertar una nueva actividad correctamente', async () => {
    const postActivity = {
      id: 3,
      nombre: 'Futbol',
      descripcion: 'Inscribete al deporte más popular de todo México.',
      categoria: 'Deporte',
      horas: 2,
      correo: 'FubtolTecnm@leon.tecnm.mx',
    };

    await api.post(API_URL).send(postActivity).expect(201);
  });

  test('Insertar una actividad con ID repetido debería fallar', async () => {
    const postActivity = {
      id: 1,
      nombre: 'Futbol',
      descripcion: 'Inscribete al deporte más popular de todo México.',
      categoria: 'Deporte',
      horas: 2,
      correo: 'FubtolTecnm@leon.tecnm.mx',
    };

    await api.post(API_URL).send(postActivity).expect(400);
  });
});

describe('Test endpoint PUT', () => {
  test('Actualizar una actividad existente correctamente', async () => {
    const updateActivity = {
      id: 1,
      nombre: 'Teatro',
      descripcion:
        'Interpreta, Actúa, Libera, Finge ser alguien más en esta vida.',
      categoria: 'Arte',
      horas: 2,
      correo: 'Teatro@leon.tecnm.mx',
    };

    await api
      .put(API_URL + '/1')
      .send(updateActivity)
      .expect(200);
  });

  test('Actualizar una actividad inexistente debería fallar', async () => {
    const updateActivity = {
      id: 2,
      nombre: 'Teatro',
      descripcion:
        'Interpreta, Actúa, Libera, Finge ser alguien más en esta vida.',
      categoria: 'Arte',
      horas: 2,
      correo: 'Teatro@leon.tecnm.mx',
    };

    await api
      .put(API_URL + '/2')
      .send(updateActivity)
      .expect(404);
  });
});

describe('Test endpoint DELETE', () => {
  test('Eliminar una actividad existente correctamente', async () => {
    await api.delete(API_URL + '/1').expect(200);
  });

  test('Eliminar una actividad inexistente debería fallar', async () => {
    await api.delete(API_URL + '/2').expect(404);
  });
});

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

afterAll(() => {
  databaseUtils.write('actividades', []);
  server.close();
});
