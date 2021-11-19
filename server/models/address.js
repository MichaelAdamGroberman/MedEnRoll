const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({   
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;