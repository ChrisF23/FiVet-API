'use strict';

var express = require('express');
var router = express.Router();

const controlador = require('../controllers/controlador');
const Paciente = require('../models/index').Paciente;

// Muestra una lista con todos los pacientes.
router.get('/', (req, res) => controlador.listar(req, res, Paciente));

// Realiza una consulta a la tabla Paciente y retorna los resultados.
//router.get('/search', (req, res) => controlador.(req,res,Cliente));

// Obtiene un paciente por su id.
router.get('/:id', (req, res) => controlador.getById(req, res, Paciente));

// Crea un paciente.
router.post('/', (req, res) => controlador.crear(req, res, Paciente));

// Elimina un paciente.
router.delete('/:id', (req, res) => controlador.eliminar(req, res, Paciente));

// Actualiza un paciente.
router.put('/', (req, res) => controlador.actualizar(req, res, Paciente))

// Exportar el router.
module.exports = router;

// Exportar el router.
module.exports = router;