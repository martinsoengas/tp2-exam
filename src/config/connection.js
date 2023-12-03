import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: './example.env' });

const dbName = 'exam';
const dialect = 'mysql';
const host = 'localhost';
const port = 3306;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
    console.log(`Database ${dbName} created or successfully checked`);
    connection.end();
  } catch (error) {
    console.error('Error creating database:', error);
    throw error;
  }
};

await createDatabase();

const connection = new Sequelize(dbName, user, password, {
  host,
  dialect,
  port,
});

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default connection;
