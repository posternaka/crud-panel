import { Sequelize } from "sequelize";

const DB_NAME = 'heroku_2fe94fa5b9fa45b';
const USER_NAME = 'bd53a02c1a58bb';
const PASSWORD = '0fffcab8';

const db = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'eu-cdbr-west-03.cleardb.net',
    dialect: 'mysql',
});

export default db;