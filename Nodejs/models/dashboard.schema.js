const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
    title: 'String',
    createdBy: String,
},{strict:false});

const UserSchema8 = new mongoose.model('dashboard',model);

module.exports = UserSchema8;