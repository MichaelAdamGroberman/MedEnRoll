import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_PATIENT = gql`
  mutation updatePatient(
    $firstName: String!
    $middleName: String
    $lastName: String!
    $dob: String!
    $gender: String!
    $address: AddressInput
    $contact: ContactInput
  ) {
    addOrUpdatePatient(
      firstName: $firstName
      middleName: $middleName
      lastName: $lastName
      dob: $dob
      gender: $gender
      address: $address
      contact: $contact
    ) {
      firstName
    }
  }
`;


export const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $appointment: AppointmentInput
  ) {
    addAppointment(
      appointment: $appointment
    ) {
        appointments {
          appointmentDateTime
          duration
          provider
          description
        }
    }
  }
`;
