import { Model, DataTypes } from 'sequelize'

class Company extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

export default Company;
