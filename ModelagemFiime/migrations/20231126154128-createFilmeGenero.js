'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filme_genero', {
      id_filme_genero: {
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
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'genero', 
          key: 'generoId', 
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
