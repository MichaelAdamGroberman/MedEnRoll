const { gql } = require('apollo-server-express');

const typeDefs = gql`
type MedicalProvider {
  _id: ID
  name: String
  description: String
}

type Address {
  _id: ID
  street: String
  city: String
  state: String
  zip: String
}

type Contact {
  _id: ID
  primaryEmail: String
  alternateEmail: String
  cellPhone: String
  homePhone: String
  workPhone: String
}

type Appointment {
  _id: ID
  appointmentDateTime: String
  duration: Int
  provider: String
  description: String
}

type Patient {
  _id: ID
  userId: String
  registrationDate: String
  firstName: String
  middleName: String
  lastName: String
  gender: String
  maritialStatus: String
  dob: String 
  address: Address
  contact: Contact
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

input ContactInput {  
  primaryEmail: String
  alternateEmail: String
  cellPhone: String
  homePhone: String
  workPhone: String
}

input AddressInput {   
  street: String
  city: String
  state: String
  zip: String
}

input AppointmentInput {
  _id: ID
  appointmentDateTime: String
  duration: Int
  provider: String
  description: String
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  addOrUpdatePatient(firstName: String, middleName: String, lastName: String, 
      gender: String, maritialStatus: String, dob: String, 
      contact: ContactInput, address: AddressInput): Patient
  addAppointment(appointment: AppointmentInput): Patient
  login(email: String!, password: String!): Auth
}

`;

module.exports = typeDefs;
