const express = require('express');

const router = express.Router();

router.get('/payment', (req, res) => {
    res.render('payment');
})

modules.exports = {router};