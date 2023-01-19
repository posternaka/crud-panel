import { Sequelize } from "sequelize";

const DB_NAME = 'task4';
const USER_NAME = 'root';
const PASSWORD = '123456';

const db = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;