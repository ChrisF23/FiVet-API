'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cliente', [
      {
        nombre: 'Christian',
        apellido_p: 'Farias',
        apellido_m: 'Aguila',
        rut: '19691840K'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cliente', null, {});
  }
};
