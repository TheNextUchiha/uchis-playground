const express = require('express');
const fs = require('fs');

const router = express.Router();

if(process.env.NODE_ENV !== 'production') {
    require('dotenv/config');
}

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

router.get('/payment', (req, res) => {
    fs.readFile('items.json', (err, data) =>  {
        if(err) {
            return res.status(500).end();
        }

        res.render('payment', {
            stripePublicKey,
            items: JSON.parse(data)
        });
    });
});

module.exports = router;