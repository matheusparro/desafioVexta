'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('City', {
      id: {
        type: Sequelize.INTEGER,
        primarayKey:true,
        autoIncrement:true,
        allownull: false,
        unique:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
   });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('City');
  }
};
