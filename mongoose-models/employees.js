var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({

  name: String,
  dateOfBirth: Number,
  adress: String,
  number: Number,
  hasWorkedOn: Object

});

var Employee = mongoose.model('Employee', employeeSchema);
