'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cliente', [
      {
        nombre: 'Raul',
        apellido_p: 'Barraza',
        rut: '8507039-8'
      },
      {
        nombre: 'Kevin',
        apellido_p: 'Araya',
        rut: '21232428-0'
      },
      {
        nombre: 'Catalina',
        apellido_p: 'Honores',
        apellido_m: 'Rivera',
        rut: '12463770-8'
      },
      {
        nombre: 'Mario',
        apellido_p: 'Hernandez',
        rut: '8593247-0'
      },
      {
        nombre: 'Javier',
        apellido_p: 'Fernandez',
        rut: '13116986-8'
      },
      {
        nombre: 'Luis',
        apellido_p: 'Jimenez',
        apellido_m: 'Molina',
        rut: '11914253-9'
      },
      {
        nombre: 'Jessica',
        apellido_p: 'Perez',
        apellido_m: 'Aguila',
        rut: '14795776-9'
      },
      {
        nombre: 'Matias',
        apellido_p: 'Barraza',
        rut: '13375177-7'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cliente', null, {});
  }
};
