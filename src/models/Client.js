import {Model, DataTypes } from 'sequelize'

class Client extends Model {
  static init(connection) {
    super.init({
      cpf_cnpj: DataTypes.STRING,
      name: DataTypes.STRING,
      trade_name: DataTypes.STRING,
      nature: DataTypes.CHAR,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      zone: DataTypes.STRING,
      phone: DataTypes.STRING,
      cell_phone: DataTypes.STRING,
      email: DataTypes.STRING,
      site: DataTypes.STRING,

    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' });
  }
}
export default Client;
