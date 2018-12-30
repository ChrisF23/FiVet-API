'use strict';

var express = require('express');
var router = express.Router();

const RegistroMedico = require('../models/index').RegistroMedico;

// Muestra una lista con todos los registros medicos.
router.get('/', (req, res) => {
    console.log("-------------------------------------------------");
    console.log("Listar clientes");
    console.log("-------------------------------------------------");

    RegistroMedico.findAll({ include: [{ all: true }] }).then((registros) => {
        return res.send(registros);
    }).catch((err) => {
        console.log("Ocurrio un error.");
        console.log(err);

        res.status = 400;
        res.send(err);
    });
});

// Exportar el router.
module.exports = router;