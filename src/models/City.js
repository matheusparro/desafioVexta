const { Model, DataTypes } = require('sequelize');

class City extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      uf: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.hasMany(models.User, { foreignkey: 'city_id', as: 'cities' });
  }
}

module.exports = City;
