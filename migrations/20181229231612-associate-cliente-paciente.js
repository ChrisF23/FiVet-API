'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Paciente', // name of Target model
      'id_cliente', // name of the key we're adding
      {
        type: Sequelize.STRING,
        references: {
          model: 'Cliente', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Paciente', // name of the Target model
      'id_cliente' // key we want to remove
    );
  }
};

// En la siguiente migracion se debe declarar que la columna agregada en esta migracion no sea nula:
// -> https://stackoverflow.com/a/3170700
