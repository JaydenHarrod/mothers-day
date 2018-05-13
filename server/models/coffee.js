const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE COFFEE SCHEMA //
const CoffeeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    avaliable: {
        type: Boolean,
        default: false
    }
    // add in geolocation
});

const Coffee = mongoose.model('coffee', CoffeeSchema);

module.exports = Coffee;