'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cliente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rut: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido_p: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido_m: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      fecha_ingreso: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      fecha_edicion: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
        onUpdate: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cliente');
  }
};