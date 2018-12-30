'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Paciente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      especie: {
        type: Sequelize.STRING
      },
      raza: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.ENUM,
        values : ['M', 'F']
      },
      castrado: {
        type: Sequelize.BOOLEAN,
        defaultValue : false
      },
      vivo: {
        type: Sequelize.BOOLEAN,
        defaultValue : true
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Paciente');
  }
};