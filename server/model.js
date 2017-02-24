var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.58.123/bookstore');
var BookSchema = new mongoose.Schema({
    name:String,
    image:String,
    price:Number
});
exports.Book = mongoose.model('Book',BookSchema);

