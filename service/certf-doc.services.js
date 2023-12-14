const express = require('express');
const userModel4 = require('../models/certf-doc.schema');
const app = {

  save: async (data) => {
    return await userModel4.create(data);
  },

  getallcollection: async () => {
    return await userModel4.find();
  },

  getcollection: async (id) => {
    return await userModel4.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel4.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel4.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;