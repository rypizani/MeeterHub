const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');


const FilmeDistribuidora = sequelize.define('filme_distribuidora', {
    
    id_filme_distribuidora: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_filme: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_distribuidora: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }    
           
},{freezeTableName: true})

exports.FilmeDistribuidora = FilmeDistribuidora;