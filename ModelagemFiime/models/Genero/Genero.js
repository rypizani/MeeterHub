const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Genero = sequelize.define('genero', {

    generoId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
      }
}, {freezeTableName: true})

exports.Genero = Genero;