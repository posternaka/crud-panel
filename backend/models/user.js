import { Sequelize } from 'sequelize';
import db from '../utils/database';

const { DataTypes } = Sequelize;

const User = db.define('users', 
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }
);

export default User;
