const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const citizenSchema = new mongoose.Schema({
  
  id: {
    type: String,
    required: true,
    unique: true
},
  name: String,
  class: String,
  moNo: Number,
  age: Number,
  address: String,
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'application', autopopulate: true }],
  bank_account: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bank-ac', autopopulate: true }],
  colony: [{ type: mongoose.Schema.Types.ObjectId, ref: 'colony', autopopulate: true }],
  Certificate_document: [{ type: mongoose.Schema.Types.ObjectId, ref: 'certf-doc', autopopulate: true }],
  
}, { strict: false });

citizenSchema.plugin(autopopulate);

const UserSchema = mongoose.model('citizen', citizenSchema);

module.exports = UserSchema;
