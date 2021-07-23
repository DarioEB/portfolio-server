const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_TEST, {
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Base de datos conectada'); 
    } catch (error) {
        console.log(error);
        // En caso de error deterner la app
        process.exit(1);
    }
}

module.exports = connection;