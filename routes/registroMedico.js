'use strict';

var express = require('express');
var router = express.Router();

const controlador = require('../controllers/controlador');
const RegistroMedico = require('../models/index').RegistroMedico;

// Muestra una lista con todos los registros medicos.
router.get('/', (req, res) => controlador.listar(req, res, RegistroMedico));

// Realiza una consulta a la tabla RegistroMedico y retorna los resultados.
//router.get('/search', (req, res) => controlador.(req,res,Cliente));

// Obtiene un registro medico por su id.
router.get('/:id', (req, res) => controlador.getById(req, res, RegistroMedico));

// Crea un registro medico.
router.post('/', (req, res) => controlador.crear(req, res, RegistroMedico));

// Elimina un registro medico.
router.delete('/:id', (req, res) => controlador.eliminar(req, res, RegistroMedico));

// Actualiza un registro medico.
router.put('/', (req, res) => controlador.actualizar(req, res, RegistroMedico))

// Exportar el router.
module.exports = router;

// Exportar el router.
module.exports = router;