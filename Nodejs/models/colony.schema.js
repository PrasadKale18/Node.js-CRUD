const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
name:String,
location:String,
},{strict:false});

const UserSchema7 = new mongoose.model('colony',model);

module.exports = UserSchema7;