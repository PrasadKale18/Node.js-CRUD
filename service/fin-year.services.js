const express = require('express');
const userModel9 = require('../models/fin-year.schema');
const app = {

  save: async (data) => {
    return await userModel9.create(data);
  },

  getallcollection: async () => {
    return await userModel9.find();
  },

  getcollection: async (id) => {
    return await userModel9.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel9.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel9.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;