import { Sequelize } from 'sequelize';
import db from '../utils/database.js';

const { DataTypes } = Sequelize;

const User = db.define('users', 
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        status_user: DataTypes.STRING,
        time_was: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }
);

export default User;
