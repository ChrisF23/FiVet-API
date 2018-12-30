'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RegistroMedico', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motivo: {
        type: Sequelize.TEXT
      },
      anamnesis: {
        type: Sequelize.TEXT
      },
      patologia: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.REAL
      },
      temperatura: {
        type: Sequelize.REAL
      },
      hidratacion: {
        type: Sequelize.STRING
      },
      pulso_por_minuto: {
        type: Sequelize.INTEGER
      },
      frecuencia_cardiaca: {
        type: Sequelize.INTEGER
      },
      frecuencia_respiratoria: {
        type: Sequelize.INTEGER
      },
      mucosas: {
        type: Sequelize.STRING
      },
      tiempo_llenado_capilar: {
        type: Sequelize.INTEGER
      },
      ganglios: {
        type: Sequelize.STRING
      },
      reflejo_tusigeno: {
        type: Sequelize.STRING
      },
      reflejo_deglutorio: {
        type: Sequelize.STRING
      },
      palpacion_abdominal: {
        type: Sequelize.STRING
      },
      palmopercusion: {
        type: Sequelize.STRING
      },
      condicion_corporal: {
        type: Sequelize.STRING
      },
      tonsilas: {
        type: Sequelize.STRING
      },
      conciencia: {
        type: Sequelize.STRING
      },
      diagnostico: {
        type: Sequelize.TEXT
      },
      tratamiento: {
        type: Sequelize.TEXT
      },
      fecha_creacion: {
        allowNull: false,
        type: Sequelize.DATE,
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        defaultValue: new Date()
      },
      fecha_edicion: {
        allowNull: false,
        type: Sequelize.DATE,
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        //onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
        defaultValue: new Date(),
        onUpdate: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RegistroMedico');
  }
};