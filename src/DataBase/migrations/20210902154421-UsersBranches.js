/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UsersBranch', {
      id: {
        type: Sequelize.INTEGER,
        primarayKey: true,
        autoIncrement: true,
        allownull: false,
        unique: true,
      },
      branch_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Branch',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      start_interval_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_interval_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('UsersBranch'),
};
