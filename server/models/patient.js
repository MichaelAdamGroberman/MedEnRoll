const { Schema, model } = require('mongoose');
const patientSchema = new Schema({
  registrationDate: {
    type: DateTime,
    required: true,
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
    type: Date,
    required: true,
  },
  age: {
    type: Int,
    required: false,
  },
  address: {
    Street: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
  contact: {
    phone: {
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
      },
    },
    email: {
      type: String,
      required: true,
    },
  },
});
