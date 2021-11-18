import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Welcome to MedEnRoll. Thank you for being a valued member.
        </h1>

        <div className='form-inputs'>
          <label className='form-label'> Your Email</label>
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
          <label className='form-label'> Your Password</label>
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
          Log in
        </button>

      </form>
    </div>
  );
};

export default FormLogin;
