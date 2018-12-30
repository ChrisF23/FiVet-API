'use strict';
module.exports = (sequelize, DataTypes) => {
  const RegistroMedico = sequelize.define('RegistroMedico', {
    motivo: DataTypes.TEXT,
    anamnesis: DataTypes.TEXT,
    patologia: DataTypes.STRING,
    peso: DataTypes.REAL,
    temperatura: DataTypes.REAL,
    hidratacion: DataTypes.STRING,
    pulso_por_minuto: DataTypes.INTEGER,
    frecuencia_cardiaca: DataTypes.INTEGER,
    frecuencia_respiratoria: DataTypes.INTEGER,
    mucosas: DataTypes.STRING,
    tiempo_llenado_capilar: DataTypes.INTEGER,
    ganglios: DataTypes.STRING,
    reflejo_tusigeno: DataTypes.STRING,
    reflejo_deglutorio: DataTypes.STRING,
    palpacion_abdominal: DataTypes.STRING,
    palmopercusion: DataTypes.STRING,
    condicion_corporal: DataTypes.STRING,
    tonsilas: DataTypes.STRING,
    conciencia: DataTypes.STRING,
    diagnostico: DataTypes.TEXT,
    tratamiento: DataTypes.TEXT
  }, {
    freezeTableName: true, 
    createdAt : 'fecha_creacion',
    updatedAt : 'fecha_edicion', 
    tableName : 'RegistroMedico'
  });
  RegistroMedico.associate = function(models) {
    // associations can be defined here
  };
  return RegistroMedico;
};