'use strict'; 

module.exports = { 
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('login', {   
    
      loginId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        select: false,
    },
    email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        select: false,
    },
    senha: {
        type: Sequelize.STRING(64),
        allowNull: false,
        select: false,
    },
    tokenJWT: {
        type: Sequelize.STRING, // Ou DSequelize.TEXT, dependendo do tamanho do token
        allowNull: true,
    },
    expiracaoTokenJWT: {
        type: Sequelize.DATE,
        allowNull: true,
        select: false,
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
    await queryInterface.dropTable('login'); 
  } 
};