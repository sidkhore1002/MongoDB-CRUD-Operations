
  var mongoose = require('mongoose');

//Define a schema
 var BookSchema = mongoose.Schema({
    id: Number,
  });
   
  module.exports = mongoose.model('book', BookSchema);

  
