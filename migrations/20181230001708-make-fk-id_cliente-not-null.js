'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Paciente', 'id_cliente', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Paciente', 'id_cliente', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  }
};
