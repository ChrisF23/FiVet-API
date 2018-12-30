'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('RegistroMedico', [
      
      {
        id_paciente: 1,
        motivo: "Dolor de pata trasera izquierda",
        peso: 12.4,
        temperatura: 35,
        tratamiento: 'Aplicar masaje todas las tardes'
      },
      {
        id_paciente: 1,
        motivo: "Dolor de cabeza",
        temperatura: 35,
        conciencia: 'Si',
        tratamiento: 'Tomar pastilla despues de almuerzo'
      },
      {
        id_paciente: 5,
        motivo: "Falta de animo",
        temperatura: 37,
        peso: 1.75,
        conciencia: 'Si',
        diagnostico: 'Resfriado comun'
      },
      {
        id_paciente: 4,
        motivo: "Ojos llorosos",
        temperatura: 36,
        peso: 2.5,
        conciencia: 'Si',
        diagnostico: 'Infeccion Ocular',
        tratamiento: 'Aplicar crema en los ojos cada 2 horas'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('RegistroMedico', null, {});
  }
};
