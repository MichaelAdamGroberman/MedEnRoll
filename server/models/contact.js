const mongoose = require('mongoose');
const { Schema } = mongoose; 

const contactSchema = new Schema({ 
  primaryEmail: {
    type: String,
    required: false,
  },
  alternateEmail: {
    type: String,
    required: false,
  },
  cellPhone: {
    type: String,
    required: false,
  },
  homePhone: {
    type: String,
    required: false,
  },
  workPhone: {
    type: String,
    required: false,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;