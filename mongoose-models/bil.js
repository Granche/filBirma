var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var bilSchema = mongoose.Schema({
  
  registration: String,
  model: String,
  damage: String,
  owner: String,

})

var Bil = db.model('Bil', bilSchema);
module.exports = Bil;