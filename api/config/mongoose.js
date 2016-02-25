var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin');

var Schema = mongoose.Schema;

var bitSchema = new Schema({
    title: {
	type: String,
	required: true
    },
    subtitle: {
	type: String,
	required: true
    },
    date: {
	type: Date,
	default: Date.now
    },
    content: {
	type: String,
	required: true
    }
}, {collection: 'Bits'})

global.Bit = mongoose.model('Bit', bitSchema);
