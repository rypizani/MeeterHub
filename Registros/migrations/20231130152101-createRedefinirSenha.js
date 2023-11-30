'use strict'; 

module.exports = { 
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('redefinirSenha', {   
    
      redefinirSenhaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        select: false,
    },
    senha: {
        type: Sequelize.STRING(64),
        allowNull: false,
        select: false,
    },
    tokenJWT: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('redefinirSenha'); 
  } 
};