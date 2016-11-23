var mongoose= require('mongoose');

var carSchema = mongoose.Schema({

	registration: {type: String, required: true},
	model: {type: String, required: true},
	damages: [{type: mongoose.Schema.Types.ObjectId, ref:'damages'}],
  customer: {type: mongoose.Schema.Types.ObjectId, ref:'customers'},
  inDate: {type: Date, required: true},
  bookedDate: {type: Date, required: false}
})

module.exports= m.mongoose.model('cars', carSchema)