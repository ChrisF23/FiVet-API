'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('RegistroMedico', [
      {
        motivo: "Se pego en la patita",
        peso: 10,
        temperatura: 35,
        conciencia: 'Si',
        tratamiento: 'Parche curita cada 3 dias'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('RegistroMedico', null, {});
  }
};
