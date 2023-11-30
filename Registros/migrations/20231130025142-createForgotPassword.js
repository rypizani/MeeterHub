'use strict'; 

module.exports = { 
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('forgotPassword', {   
    
    forgotId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      select: false,
    },
    email: {
        type: Sequelize.STRING(64),
        allowNull: false,
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
    await queryInterface.dropTable('forgotPassword'); 
  } 
};