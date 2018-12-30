'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Paciente', [
        {
          id_cliente: 1,
          nombre: 'Cachupin',
          especie: 'Canino',
          sexo: 'M'
        },
        {
          id_cliente: 2,
          nombre: 'Scott',
          especie: 'Canino',
          raza: 'Beagle',
          sexo: 'M'
        },
        {
          id_cliente: 3,
          nombre: 'Carlota',
          especie: 'Felino',
          sexo: 'F',
          castrado: true
        },
        {
          id_cliente: 4,
          nombre: 'Kim',
          especie: 'Felino',
          sexo: 'F',
          castrado: true
        },
        {
          id_cliente: 4,
          nombre: 'Coco',
          especie: 'Felino',
          raza: 'Azul ruso',
          sexo: 'M'
        },
        {
          id_cliente: 5,
          nombre: 'Bruno',
          especie: 'Felino',
          raza: 'Persa',
          sexo: 'M'
        },
        {
          id_cliente: 6,
          nombre: 'Boby',
          especie: 'Canino',
          sexo: 'M'
        },
        {
          id_cliente: 7,
          nombre: 'Balto',
          raza: 'San Bernardo',
          especie: 'Canino',
          sexo: 'M'
        },
        {
          id_cliente: 8,
          nombre: 'Duque',
          especie: 'Canino',
          raza: 'Husky',
          sexo: 'M'
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Paciente', null, {});
  }
};
