//THIS CONTAINS ALL THE SUB ROUTES FOR DESTINATION MYSQL TABLE

const daoClass = require('../../dao/destinationdao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

//This router under looks like this
//ex. localhost:4000/api/destinations/
router.get('/', (req, res) => {
    dao.findAll(req, res);
})

//ex. localhost:4000/api/destinations/post
router.post('/post', (req,res) =>{
    dao.postBody(req, res);
})

//?this is inserting information to our destinations table
//ex. localhost:4000/api/destinations/createdestination
router.post('/createDestination', (req,res)=> {
    dao.createDestination(req,res);
})

module.exports = router