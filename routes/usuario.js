'use strict';

var express = require('express');
var router = express.Router();

const controlador = require('../controllers/controlador');
const Usuario = require('../models/index').Usuario;

// Muestra una lista con todos los clientes.
router.get('/', (req, res) => controlador.listar(req, res, Usuario));

// Realiza una consulta a la tabla Usuario y retorna los resultados.
//router.get('/search', (req, res) => controlador.(req,res,Usuario));

// Obtiene un cliente por su id.
router.get('/:id', (req, res) => controlador.getById(req, res, Usuario));

// Crea un Usuario.
router.post('/', (req, res) => controlador.crear(req, res, Usuario));

// Elimina un Usuario.
router.delete('/:id', (req, res) => controlador.eliminar(req, res, Usuario));

// Actualiza un Usuario.
router.put('/', (req, res) => controlador.actualizar(req, res, Usuario))

// Exportar el router.
module.exports = router;