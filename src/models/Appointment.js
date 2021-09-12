import { Model, DataTypes } from 'sequelize'

class Appointment extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
  static associate(models) {
    this.hasMany(models.User, { foreignkey: 'user_id', as: 'user' });
    this.hasMany(models.Branch, { foreignkey: 'branch_id', as: 'branch' });
  }
}


export default Appointment;
