'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nombre: DataTypes.STRING,
    especie: DataTypes.STRING,
    raza: DataTypes.STRING,
    sexo: { type: DataTypes.ENUM, values: ['M', 'F'] },
    castrado: DataTypes.BOOLEAN,
    vivo: DataTypes.BOOLEAN,
    fecha_nacimiento: DataTypes.DATE
  }, {
      freezeTableName: true,
      createdAt: 'fecha_ingreso',
      updatedAt: 'fecha_edicion',
      tableName: 'Paciente'
    });
  Paciente.associate = function (models) {
    // associations can be defined here
    Paciente.hasMany(models.RegistroMedico, {
      foreignKey: {
        name: 'id_paciente',
        allowNull: false
      }
    });

    Paciente.belongsTo(models.Cliente, {
      foreignKey: {
        name: 'id_cliente',
        allowNull: false,
      }
    });


  }
  return Paciente;
};