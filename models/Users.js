const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// define the class for our model
class Users extends Model {
    // instance method
    async checkPassword(loginPw) {
        return await bcrypt.compareSync(loginPw, this.password);
    }
}
// init the model
Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                notNull: true
            },
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                newUserData.email = newUserData.email.toLowerCase();
                return newUserData;
            },
            async beforeBulkCreate(bulkUserData) {
                for (const user of bulkUserData) {
                    user.password = await bcrypt.hash(user.password, 10)
                }
                return bulkUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.password) {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                }

                if (updatedUserData.email) {
                    updatedUserData.email = updatedUserData.email.toLowerCase();
                }
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users'
    }
);

module.exports = Users;
