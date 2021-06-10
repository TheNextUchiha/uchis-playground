const mongoose = require('mongoose');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv/config');
}

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const localURI = process.env.MONGO_LOCAL_URI;

try {
    mongoose.connect(localURI, {        // For Offline
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log('DB Online');
    console.log('Linux -> systemctl start mongo, if an error arises!');
} catch (err) {
    console.log('Error while connecting to DB :', err);
}

module.exports = {mongoose};