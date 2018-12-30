'use strict'

const express = require('express');
const bodyParser = require('body-parser');


const clienteRouter = require('./routes/cliente');
const pacienteRouter = require('./routes/paciente');
const registroMedicoRouter = require('./routes/registroMedico');


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.use('/clientes', clienteRouter);
app.use('/pacientes', pacienteRouter);
app.use('/registros', registroMedicoRouter);


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
