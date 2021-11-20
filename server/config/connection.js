const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'http://mongodb+srv//mgroberman:Tu3sday29@cluster0.toizs.mongodb.net/MedEnRoll?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

