'use strict'; 

module.exports = { 
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('registro', {   
    registroId: { 
      type: Sequelize.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    }, 
    nome: { 
      type: Sequelize.STRING(64), 
      allowNull: false, 
    }, 
    email: { 
      type: Sequelize.STRING(64), 
      allowNull: false, 
      unique: true, }, 
    senha: { 
      type: Sequelize.STRING(64), 
      allowNull: false, 
    }, 
    endereco: { 
      type: Sequelize.STRING(64), 
      allowNull: false, 
    }, 
    CEP: { 
      type: Sequelize.STRING(11), 
      allowNull: false, 
    }, 
    createdAt: { 
      allowNull: false, 
      type: Sequelize.DATE, 
    }, 
    updatedAt: { 
      allowNull: false, 
      type: Sequelize.DATE, 
    }, 
  }); 
}, 

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('registro'); 
  } 
};