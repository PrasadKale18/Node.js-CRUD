const express = require('express');
const userModel2 = require('../models/app-catagory.schema');
const app = {

  save: async (data) => {
    return await userModel2.create(data);
  },

  getallcollection: async () => {
    return await userModel2.find();
  },

  getcollection: async (id) => {
    return await userModel2.findById(id);
  },
  
 
  updatecollection: async (id, topic) => {
    const result = await userModel2.findByIdAndUpdate(id, topic, { new: true });
    return result;
  },

  deletecollection: async (id) => {
    const result = await userModel2.findByIdAndDelete(id);
    return result;
  },


}
module.exports = app;