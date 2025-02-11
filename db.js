const mysql = require("mysql2");
require('dotenv').config();

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "anisong",
});

module.exports = pool.promise();