const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
},
    issuerName: { type: String, required: true },
    issueDate: { type: Date, default: Date.now },
    recipient: {
      name: { type: String, required: true },
      email: String,
    },
},{strict:false});

const UserSchema5 = new mongoose.model('certf-issue',model);

module.exports = UserSchema5;