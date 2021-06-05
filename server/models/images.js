const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    img: {
        type: Buffer
    }
});

const Image = mongoose.model('Images', imageSchema, 'images');

module.exports = {Image};