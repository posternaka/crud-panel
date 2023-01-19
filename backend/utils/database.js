import { Sequelize } from "sequelize";

const DB_NAME = 'users';
const USER_NAME = 'root';
const PASSWORD = 'mysqlnodejs';

const db = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;