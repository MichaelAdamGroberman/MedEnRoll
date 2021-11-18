const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Appointment {
  _id: ID
  appointmentDateTime: String
  duration: Int
  provider: String
  description: String
}

type MedicalProvider {
  _id: ID
  name: String
  description: String
}

type Patient {
  _id: ID
  registrationDate: String
  firstName: String
  middleName: String
  lastName: String
  gender: String
  maritialStatus: String
  dob: String
  age: String
  appointments:[Appointment]
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String    
  password: String
}

type Auth {
  token: ID
  user: User
}

type Query {
  patients: [Patient]
  providers: [MedicalProvider]
  patient(_id: ID!): Patient
  user: User
  appointment(_id: ID!): Appointment
}


`;

module.exports = typeDefs;
