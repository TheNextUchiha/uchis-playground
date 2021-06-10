const express = require('express');
const hbs = require('hbs');

const index = require('./routes/index');
const fileUpload = require('./routes/fileupload');
const paymentGateway = require('./routes/payment');

const { mongoose } = require('./server/db/mongoose');   // To initialize Mongoose

if(process.env.NODE_ENV !== 'production') {
    require('dotenv/config');
}

const port = process.env.PORT;
const app = express();

// ---> View Engine <---
app.set('view engine', 'hbs');

// ---> Express middlewares <---
app.use(express.static(__dirname + '/views'));      // To include static HTML pages or CSS

// ---> Routes <---
app.use(index);
app.use(fileUpload);
app.use(paymentGateway);

// ---> Express configs <---
app.use(express.urlencoded({extended: false}));     // To accept URL Encoded Data

// ---> Handlebars Helpers <---
hbs.registerHelper('divideThis', function(a, b) {
    return a/b;
});

// ---> App Init <---
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});