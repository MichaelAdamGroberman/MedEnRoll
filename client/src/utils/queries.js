import { gql } from '@apollo/client';

export const GET_PATIENT = gql`
  query getPatient($userId: ID!) {
    patient(_id:$userId) {
      _id
      firstName
      middleName
      lastName
      gender
      address {
        street
      }
      contact {
        cellPhone
      }
      appointments {
        appointmentDateTime
        duration
        provider
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
