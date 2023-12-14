const express = require('express');
const userModel6 = require('../models/certf-type.schema');
const app = {

  save: async (data) => {
    return await userModel6.create(data);
  },

  getallcollection: async () => {
    return await userModel6.find();
  },

  getcollection: async (id) => {
    return await userModel6.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel6.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel6.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;