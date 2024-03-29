import { Model, DataTypes } from 'sequelize'

class City extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      uf: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }

}

export default City;
