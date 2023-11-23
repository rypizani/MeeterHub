const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Filme = sequelize.define('filme', {

    filmeId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
      }
}, {freezeTableName: true})

exports.Filme = Filme;