const mysql = require('mysql');
const pool = mysql.createPool({
  host : '127.0.0.1',
  port : '3306',
  user : 'user',
  password : '',
  database : 'game',
  connectionLimit : '15'
});

module.exports = pool;