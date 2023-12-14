const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({

  id: {
    type: String,
    required: true,
    unique: true
},
  name:String,
  description:String

},{strict:false});

const UserSchema2 = new mongoose.model('app-catagory',model);

module.exports = UserSchema2;