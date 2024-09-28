const { Router } = require('express');

const {
  getActividades,
  getActividad,
  postActividad,
  putActividad,
  deleteActividad,
} = require('../controllers/extraescolares.controller');

const router = Router();

router.get('/', getActividades);
router.get('/:id', getActividad);
router.post('/', postActividad);
router.put('/:id', putActividad);
router.delete('/:id', deleteActividad);

module.exports = router;
