const {createPool} = require('mysql2');
require("dotenv").config();
const pool = createPool
({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

module.exports = pool;