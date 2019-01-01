'use strict'

const express = require('express');
const bodyParser = require('body-parser');


const clienteRouter = require('./routes/cliente');
const pacienteRouter = require('./routes/paciente');
const registroMedicoRouter = require('./routes/registroMedico');


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Redireccionar.
app.get('/', (req, res) => res.redirect('/api/'));

//Rutas.
app.get('/api/', (req, res) => res.send('FiVet API'));
app.use('/api/clientes', clienteRouter);
app.use('/api/pacientes', pacienteRouter);
app.use('/api/registros', registroMedicoRouter);


app.listen(3000, () => {
    console.log('Ir a http://localhost:3000/api/');
});
