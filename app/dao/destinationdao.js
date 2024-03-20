//import mysql connection information
const pool = require('../config/dbconfig')


//thy are we making javascript class and constructor?

class DestinationDao{

    constructor(){
        this.pool = pool;
    }

    findAll(req, res){
        pool.query('SELECT * FROM destination', (err, rows, fields)=> {
            console.log(rows)
            res.send(rows)
        })
    }

    postBody(req,res){
        console.log(req.body)
        res.send('Data has been submitted')
    }
}

module.exports = DestinationDao;