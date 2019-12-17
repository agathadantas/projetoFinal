const express = require('express');
const router = express.Router();

const controller = require("../controllers/UsuariosController")

router.get('', controller.getAll)
router.post('', controller.add)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:usuarioId/voluntarios', controller.addVoluntario)
router.patch('/:usuarioId/voluntarios', controller.updateVoluntario)
router.get('/:usuarioId/voluntarios/:voluntarioId', controller.getVoluntarioById)

module.exports = router
