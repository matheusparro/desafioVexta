import { Model, DataTypes } from 'sequelize'

class Branch extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
    this.belongsToMany(models.User, {through: 'UsersBranch', foreignKey: 'branch_id', as: 'users'})
  }
}


export default Branch;
