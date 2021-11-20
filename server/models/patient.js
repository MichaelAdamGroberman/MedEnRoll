const mongoose = require('mongoose');
const { Schema } = mongoose;
const Contact = require('./contact');
const Address = require('./address');
const Appointment = require('./appointment');

const patientSchema = new Schema({  
  registrationDate: {
    type: Date,
    required: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  maritialStatus: {
    type: String,
    required: false,
  },  
  dob: {
    type: String,
    required: false,
  },  
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: Address.schema,  
  contact: Contact.schema,
  appointments: [Appointment.schema]
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;