const mysql=require("mysql2");
require("dotenv").config();

try {
    const db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    module.exports = db;
    console.log("DATABASE CONNECTED")
} catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
}