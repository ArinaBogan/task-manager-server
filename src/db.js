const { config } = require("dotenv");
const { Pool } = require("pg");
config();
const { PASSWORD, DATABASE, DB_PORT, DB_HOST, DB_USER } = process.env;

const pool = new Pool({
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
});

module.exports = pool;
