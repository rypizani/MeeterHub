const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const FilmeGenero = sequelize.define('filme_genero', {

    id_filme_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_filme: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {freezeTableName: true})

exports.FilmeGenero = FilmeGenero;