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

    createDestination(req,res){
        console.log(req.body)

        //*Object.keys(req.body) puts the names of the object attributes into an array
        let fields = Object.keys(req.body)
        console.log(fields)

        let values =  Object.values(req.body)
        console.log(values);


        pool.query(`INSERT INTO destination (${fields.join(',')}) VALUES(${Values.join(',')});`)
    }
}

module.exports = DestinationDao;