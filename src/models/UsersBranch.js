import { Model, DataTypes } from 'sequelize'

class UsersBranch extends Model {
  static init(connection) {
    super.init({
      user_id:DataTypes.INTEGER,
      branch_id:DataTypes.INTEGER,
      start_time:DataTypes.DATE,

      start_interval_time:DataTypes.DATE,

      end_interval_time:DataTypes.DATE,

      end_time:DataTypes.DATE,

    }, {
      sequelize: connection,
    });
  }
  static associate(models) {
    this.belongsTo(models.User, { primaryKey: 'user_id', as: 'user' });
    this.belongsTo(models.Branch, { primaryKey: 'branch_id', as: 'branch' });
  }
}
export default UsersBranch;
