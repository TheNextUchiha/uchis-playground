const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const localURI = 'mongodb://localhost:27017/UchisPlayground';

try {
    mongoose.connect(localURI, {      // For Offline
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log('DB Online');
} catch (err) {
    console.log('Error while connecting to DB :', err);
}

module.exports = {mongoose};