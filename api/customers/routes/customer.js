const express = require('express');
const router = express.Router();
const customer =require('../models/customer');
// API CRUD

router.get('/customer',(req,res) =>{
    res.json({
        name:'Customer'
    })
});

module.exports = router;

