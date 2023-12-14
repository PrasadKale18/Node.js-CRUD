const express = require('express');
const userModel5 = require('../models/certf-issue.schema');
const app = {

  save: async (data) => {
    return await userModel5.create(data);
  },

  getallcollection: async () => {
    return await userModel5.find();
  },

  getcollection: async (id) => {
    return await userModel5.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel5.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel5.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;