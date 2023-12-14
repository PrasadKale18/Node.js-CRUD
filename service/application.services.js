const express = require('express');
const userModel1 = require('../models/application.schema');
const app = {

  save: async (data) => {
    return await userModel1.create(data);
  },

  getallcollection: async () => {
    return await userModel1.find();
  },

  getcollection: async (id) => {
    return await userModel1.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel1.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel1.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;