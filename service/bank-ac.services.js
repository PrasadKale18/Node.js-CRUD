const express = require('express');
const userModel3 = require('../models/bank-ac.schema');
const app = {

  save: async (data) => {
    return await userModel3.create(data);
  },

  getallcollection: async () => {
    return await userModel3.find();
  },

  getcollection: async (id) => {
    return await userModel3.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel3.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel3.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;