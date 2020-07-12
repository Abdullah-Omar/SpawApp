const mysql = require("mysql2")

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'world',
    password: 'A@123456789'
});


module.exports = pool.promise()
