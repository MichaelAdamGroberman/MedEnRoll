const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicalProviderSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

const MedicalProvider = mongoose.model('MedicalProvider', medicalProviderSchema);

module.exports = MedicalProvider;