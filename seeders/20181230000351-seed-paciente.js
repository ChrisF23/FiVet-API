'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Paciente', [
      {
        id_cliente: 1,
        nombre: 'Cachupin',
        especie: 'Canino',
        sexo: 'M'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Paciente', null, {});
  }
};
