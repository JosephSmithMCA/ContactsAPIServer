const daoClass = require('../../dao/categorydao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

//This router under looks like this
//ex. localhost:4000/api/categories/
router.get('/', (req, res) => {
    dao.findAll(req, res);
})

router.get('/destinationcategory', (req,res)=> {
    dao.showDestinationCategory(req,res);
})
module.exports = router