const mysql = require('mysql2');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u226780189_Meeter', 'u226780189_Meeter', 'Meeterhub2023', {
  host: '31.170.160.103',
  dialect: 'mysql'
});


function init() {
  sequelize.sync({
      alter: true
  }).then(res => {
      console.log("Database connection successful")
  }).catch(err => console.log("Errors", err))
}

async function connect()
{
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

function close()
{
  sequelize.close()
}


exports.sequelize = sequelize
exports.connect = connect
exports.close = close
exports.init = init