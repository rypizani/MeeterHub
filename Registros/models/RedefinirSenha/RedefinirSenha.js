const { DataTypes } = require("sequelize");
const { sequelize } = require("../../dbconfig");

const RedefinirSenha = sequelize.define('senha', {

    redefinirSenhaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    }
} , {freezeTableName: true});

exports.RedefinirSenha = RedefinirSenha;