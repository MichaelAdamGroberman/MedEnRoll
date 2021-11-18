import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import '../styles/Form.css';
import {Container, Row,Col} from 'react-bootstrap';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    
    <form onSubmit={handleFormSubmit}>
    <Container className="form-container signup-container">
      <Row><Col className="form-title">Signup</Col></Row>
      <Row>
        <Col md={5}> 
          <img className='signup-img'  src='images/signup-bg.jpg' alt='doctor' />
        </Col>
        <Col md={7}> 
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-control"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className="flex-row flex-end text-center">
                Already have an account? 
                <Link to="/login">Login</Link>
          </div>      
        </Col> 
      </Row>
    </Container>
    </form>
  );
}

export default Signup;
