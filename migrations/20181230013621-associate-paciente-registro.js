'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'RegistroMedico', // name of Target model
      'id_paciente', // name of the key we're adding
      {
        type: Sequelize.STRING,
        references: {
          model: 'Paciente', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'RegistroMedico', // name of the Target model
      'id_paciente' // key we want to remove
    );
  }
};
