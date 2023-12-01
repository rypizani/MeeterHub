'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('registro', 'token', {
      type: Sequelize.STRING, // ou outro tipo de dados apropriado
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('registro', 'token');
  }
};