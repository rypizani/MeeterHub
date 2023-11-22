const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');


const Login = sequelize.define('login', {
    
    loginId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      password: {
        type: DataTypes.STRING(64),
      },
      tp_login: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
      }
},{freezeTableName: true})

exports.Login = Login;