const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
    name: String,
    minimumBalance: { type: Number, default: 0 },
    interestRate: Number,
    createdOn: { type: Date, default: Date.now },
},{strict:false});

const UserSchema3 = new mongoose.model('bank-ac',model);

module.exports = UserSchema3;