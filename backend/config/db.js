const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "job_portal"
});

connection.connect((err) => {
  if (err) console.log("Database connection failed");
  else console.log("Database connected");
});

module.exports = connection;