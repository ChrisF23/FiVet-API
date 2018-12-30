'use strict';

var express = require('express');
var router = express.Router();

//const controladorCliente = require('../controllers/cliente');

// Obtener modelo Cliente.
const Cliente = require('../models/index').Cliente;

// Muestra una lista con todos los clientes.
router.get('/', (req, res) => {
    console.log("-------------------------------------------------");
    console.log("Listar clientes");
    console.log("-------------------------------------------------");

    Cliente.findAll({ include: [{ all: true }] }).then((clientes) => {
        return res.send(clientes);
    }).catch((err) => {
        console.log("Ocurrio un error.");
        console.log(err);

        res.status = 400;
        res.send(err);
    });
});

// Realiza una consulta a la tabla Cliente y retorna los resultados.
router.get('/search', (req, res) => {
    res.send("Buscar clientes");
});

router.get('/:id', (req, res) => {
    res.send("Obtener cliente con ID: " + (req.body.id != null ? req.body.id : 'NO ID'));
});

// Crea un Cliente.
router.post('/', (req, res) => {
    res.send("Crear cliente");
});

// Elimina un Cliente.
router.delete('/:id', (req, res) => {
    res.send("Eliminar cliente");
});

// Actualiza un Cliente.
router.put('/', (req, res) => {
    res.send("Actualizar cliente");
})

// Exportar el router.
module.exports = router;