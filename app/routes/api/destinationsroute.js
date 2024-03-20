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

module.exports = router