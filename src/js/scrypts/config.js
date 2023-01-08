const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SdfUsuf12!',
    database: 'mydb'
})

module.exports = db;