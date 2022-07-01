const mysql = require("mysql2")
require("dotenv").config()

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb",
    timezone: "+00:00"
  })

module.exports = connection