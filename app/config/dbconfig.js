//importing MySQL package
const mysql = require('mysql')

//create the connection information
const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    database:'vacationdestination'
})

//this is making out "pool" variable have access everywhere
module.exports = pool;
//THIS ACTUALLY STARTS THE MYSQL DATABASE CONNECTION
//We are making err catches if something goes wrong
pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
      }
    }
    if (connection) connection.release()
 
    return
  })