'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filme_alocacoes', {
      id_filme_alocacoes: {
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
      id_filme_distribuidora: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'distribuidora', 
          key: 'distribuidoraId', 
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
    await queryInterface.dropTable('filme_alocacoes');
  }
};
