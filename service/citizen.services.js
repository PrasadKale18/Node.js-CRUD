const express = require('express');
const userModel = require('../models/citizen.schema');
const app = {

  save: async (data) => {
    return await userModel.create(data);
  },

  getallcollection: async () => {
    return await userModel.find();
  },

  getcollection: async (id) => {
    return await userModel.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;