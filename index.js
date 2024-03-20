//?import express to help make our web api sever
const express = require('express');
//?this is the variable we'll call inorder to call an express method/function the package has
const app = express();
//* the localhost port we'll use
const port = 4000;
//IMPORT OUR router.js CODE
const router = require('./app/routes/router')

app.use(express.json());
app.use(express.urlencoded({extended:true,}));

// app.get('/', (req,res) => {
//     res.send('Why are you here')
// })



//anytime the server runs this will run if nothing goes wrong
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})


//OUR NEW DIRECTORY FOR GET/POST REQUEST
app.use('/api', router)