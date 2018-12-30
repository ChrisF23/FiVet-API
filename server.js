'use strict'

const express = require('express');
const bodyParser = require('body-parser');


const clienteRouter = require('./routes/cliente');
const pacienteRouter = require('./routes/paciente');
const registroMedicoRouter = require('./routes/registroMedico');


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

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
