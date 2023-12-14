const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project');

const model = new mongoose.Schema({
    recipientName: { type: String, required: true },
    courseName: { type: String, required: true },
    issuedBy: { type: String, required: true },
    issueDate: { type: Date, default: Date.now },
    expirationDate: Date,
    additionalInfo: String,
    certificateType: { type: String, required: true },
},{strict:false});

const UserSchema6 = new mongoose.model('certf-type',model);

module.exports = UserSchema6;