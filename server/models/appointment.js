const mongoose = require('mongoose');

const { Schema } = mongoose;
const appointmentSchema = new Schema({
  appointmentDateTime: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
    trim: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;