'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filme_ator', {
      id_filme_ator: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_filme: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'filme', 
          key: 'filmeId', 
        },
        onDelete: 'cascade', 
        onUpdate: 'cascade', 
      },
      id_ator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ator', 
          key: 'atorId', 
        },
        onDelete: 'cascade', 
        onUpdate: 'cascade', 
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
    await queryInterface.dropTable('filme_genero');
  }
};
