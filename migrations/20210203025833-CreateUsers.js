'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primarayKey:true,
        autoIncrement:true,
        allownull: false,
        unique:true,
      },
      login:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      is_admin:{
        type: Sequelize.BOOLEAN,
        allowNull:true,
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
    return queryInterface.dropTable('users');
  }
};
