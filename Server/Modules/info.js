var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    model: String,
    pk: Number
});

module.exports = mongoose.model('info' , dbSchema, 'Energy_data');