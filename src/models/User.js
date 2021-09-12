import { Model, DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
  static init(connection) {
      super.init({
        login: DataTypes.STRING,
        name: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        isAdmin: DataTypes.CHAR,
      }, {
        sequelize: connection,
      });
      this.addHook('beforeSave', async (user) => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      });

      return this;
    }

    checkPassword(password) {
      return bcrypt.compare(password, this.password_hash);
    }
    static associate(models) {
      this.hasMany(models.Company, { foreignkey: 'company_id', as: 'companies' });

      this.belongsToMany(models.Branch, {through: 'UsersBranch', foreignKey: 'user_id', as: 'branches'})
    };
  }


export default User;
