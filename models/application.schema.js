const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name:String,
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    createdAt: {
    type:Date,
    default:Date.now
   },

},{strict:false});

const UserSchema1 = new mongoose.model('application',model);

module.exports = UserSchema1;