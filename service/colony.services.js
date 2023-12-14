const express = require('express');
const userModel7 = require('../models/colony.schema');
const app = {

  save: async (data) => {
    return await userModel7.create(data);
  },

  getallcollection: async () => {
    return await userModel7.find();
  },

  getcollection: async (id) => {
    return await userModel7.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel7.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel7.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;