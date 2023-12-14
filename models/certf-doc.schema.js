const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    recipientName: { type: String, required: true },
    courseName: { type: String, required: true },
    issuedBy: { type: String, required: true },
    issueDate: { type: Date, default: Date.now },
    expirationDate: Date,
    additionalInfo: String,
},{strict:false});

const UserSchema4 = new mongoose.model('certf-doc',model);

module.exports = UserSchema4;