const express = require('express');
const userModel8 = require('../models/dashboard.schema');
const app = {

  save: async (data) => {
    return await userModel8.create(data);
  },

  getallcollection: async () => {
    return await userModel8.find();
  },

  getcollection: async (id) => {
    return await userModel8.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel8.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel8.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;