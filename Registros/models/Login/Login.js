const { DataTypes } = require("sequelize");
const { sequelize } = require("../../dbconfig");

const Login = sequelize.define('login', {

    loginId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        select: false,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        select: false,
    },
    senha: {
        type: DataTypes.STRING(64),
        allowNull: false,
        select: false,
    },
    tokenJWT: {
        type: DataTypes.STRING, // Ou DataTypes.TEXT, dependendo do tamanho do token
        allowNull: true,
    },
    expiracaoTokenJWT: {
        type: DataTypes.DATE,
        allowNull: true,
        select: false,
    }
} , {freezeTableName: true});

exports.Login = Login;