'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('registro', 'token', {
      type: Sequelize.STRING, // ou outro tipo de dados apropriado
      allowNull: false, // ou false, dependendo se o campo é obrigatório ou não
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('registro', 'token');
  }
};