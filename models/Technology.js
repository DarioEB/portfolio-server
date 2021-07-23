const mongoose = require('mongoose');

const TechnologySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    }
})

module.exports = mongoose.model('Technology', TechnologySchema);