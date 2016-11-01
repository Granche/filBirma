var mongoose = require('mongoose');

var bilSchema = mongoose.Schema({
  
  registration: String,
  model: String,
  damage: String,
  owner: Object,
   
})

module.exports = m.mongoose.model('Bil', bilSchema)