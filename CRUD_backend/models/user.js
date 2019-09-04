
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Users = new Schema({
    id: { type: Number},
    name: {type: String}
});

module.exports = mongoose.model('Users', Users)

