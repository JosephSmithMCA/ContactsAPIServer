const pool = require('../config/dbconfig');




class CategoryDao{


    constructor(){
        this.pool = pool;
    }

    findAll(req, res){
        pool.query('SELECT * FROM category', (err, rows, fields) =>{
            console.log(rows)
            res.send(rows)
        })
    }
    showDestinationCategory(req, res){
        pool.query('SELECT typeofdestination.id, destination.name AS dName, category.name FROM typeofdestination INNER JOIN destination ON destination.id = typeofdestination.destinationID INNER JOIN category.id= type of destination.categoryID', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }
}


module.exports = CategoryDao