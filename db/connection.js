const mongoose = require('mongoose');
const { connect } = require('../routes/tasks');

const connectDB = url => {
  return mongoose.connect(url);
};

module.exports = connectDB;
