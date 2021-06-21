import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,  
            },
            id_google: Sequelize.STRING,
            email: Sequelize.STRING,
            name: Sequelize.STRING,
            photo: Sequelize.STRING,
            },
            {
                sequelize, tableName: 'users'
            }
        )
    }
}

export default User;
