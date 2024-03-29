'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Client', {
      id: {
        type: Sequelize.INTEGER,
        primarayKey:true,
        autoIncrement:true,
        allownull: false,
        unique:true,
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'City',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      cpf_cnpj:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      trade_name:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      nature:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      address:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      number:{
        type: Sequelize.NUMERIC,
        allowNull: true,
      },
      zone:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cell_phone:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      site:{
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('Client');
  }
};
