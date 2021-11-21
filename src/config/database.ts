// import { Pool } from 'pg';
import { DATABASE, HOST, PASSWORD, USER } from './env';

// export const pool = new Pool({
//     user: USER,
//     host: HOST,
//     password: PASSWORD,
//     database: DATABASE,
//     port: 5432
// });

import { Sequelize } from 'sequelize';

const databaseConnection = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres'
});

export default databaseConnection;