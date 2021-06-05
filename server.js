const express = require('express');
const hbs = require('hbs');

const index = require('./routes/index');
const fileUpload = require('./routes/fileupload');

const { mongoose } = require('./server/db/mongoose');   // To initialize Mongoose

require('dotenv/config');

const port = process.env.PORT;
const app = express();

// ---> View Engine <---
app.set('view engine', 'hbs');

// ---> Express middlewares <---
app.use(express.static(__dirname + '/views'));      // To include static HTML pages or CSS

// ---> Routes <---
app.use(index);
app.use(fileUpload);

// ---> Express configs <---
app.use(express.urlencoded({extended: false}));     // To accept URL Encoded Data

// ---> App Init <---
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});