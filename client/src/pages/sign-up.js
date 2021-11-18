import React, { useState } from 'react';
import validate from './validation';
import useSignUpForm from '../controllers/signup';
import './style.css';

  
function SignUpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleChange, handleSubmit, values, errors } = useSignUpForm(
    submitForm,
    validate
  );
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='img/home.jpg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          // <SignUpForm submitForm={submitForm} />
          <div className='form-content-right'>
          <form submitForm={submitForm}  onSubmit={handleSubmit} className='form' noValidate>
            <h1>Welcome to MedEnRoll</h1>
            <h2>
            Making appointments just got easier. Get rid of long queues and doctor's forms before you enter a doctor's. Sign up today!
            </h2>
            <div className='form-inputs'>
              <label className='form-label'>First Name</label>
              <input
                className='form-input'
                type='text'
                name='firstname'
                placeholder='Enter your first name'
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Last Name</label>
              <input
                className='form-input'
                type='text'
                name='lastname'
                placeholder='Enter your last name'
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p>{errors.lastname}</p>}
            </div>
        
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Sign up
            </button>
            <span className='form-input-login'>
              Already have an account? Login <a href='#/'>here</a>
            </span>
          </form>
        </div>
        ) : (
          <h1> </h1>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
