'use strict';

var express = require('express');
var router = express.Router();

// Obtener modelo Paciente.
const Paciente = require('../models/index').Paciente;
const Cliente = require('../models/index').Cliente;

// Muestra una lista con todos los pacientes.
router.get('/', (req, res) => {
    console.log("-------------------------------------------------");
    console.log("Listar pacientes");
    console.log("-------------------------------------------------");

    Paciente.findAll({ include: [{ all: true }] }).then((pacientes) => {
        return res.send(pacientes);
    }).catch((err) => {
        console.log("Ocurrio un error.");
        console.log(err);

        res.status = 400;
        res.send(err);
    });
});

// Realiza una consulta a la tabla Paciente y retorna los resultados.
router.get('/search', (req, res) => {
    res.send("Buscar pacientes");
});

router.get('/:id', (req, res) => {
    res.send("Obtener paciente con ID:" + (req.body.id != null ? req.params.id : 'NO ID'));
});

// Crea un paciente.
router.post('/', (req, res) => {
    res.send("Crear paciente");
});

// Elimina un paciente.
router.delete('/:id', (req, res) => {
    res.send("Eliminar paciente");
});

// Actualiza un paciente.
router.put('/', (req, res) => {
    res.send("Actualizar paciente");
})

// Exportar el router.
module.exports = router;