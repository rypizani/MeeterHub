const mysql = require('mysql2');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u226780189_Meeter', 'u226780189_Meeter', 'Meeterhub2023', {
  host: '31.170.160.103',
  dialect: 'mysql'
});

module.exports = sequelize;