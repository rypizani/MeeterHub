const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const bcrypt = require('bcrypt');

const Registro = sequelize.define('registro', {

    registroId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }, 
    endereco: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    CEP: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    token:{
        type: DataTypes.STRING,
    }

}, {freezeTableName: true});

/*
Criptogragia no model:

Registro.beforeCreate(async (registro) => {
    try {
        const hashedPassword = await bcrypt.hash(registro.senha, 10);
        registro.senha = hashedPassword;
    } catch (error) {
        throw new Error('Erro ao criptografar a senha:', error);
    }
});
*/

exports.Registro = Registro;