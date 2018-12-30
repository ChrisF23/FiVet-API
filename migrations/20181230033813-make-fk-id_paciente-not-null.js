'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('RegistroMedico', 'id_paciente', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('RegistroMedico', 'id_paciente', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  }
};
