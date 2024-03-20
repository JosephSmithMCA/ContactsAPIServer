//import express
const express = require('express');
//IMPORTING express ROUTER
//This method is built into express and it allows us to chain directories the way we want
//ex. http://localhost:4000/api/categoies
//    http://localhost:4000/api/destination
const router = express.Router()


router.use('/destinations', require ('./api/destinationsroute'));

router.use('/categories', require('./api/categoryroute'));



module.exports = router;