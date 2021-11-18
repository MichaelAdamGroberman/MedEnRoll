import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://images.pexels.com/photos/5207095/pexels-photo-5207095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='doctor' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
            <FormSuccess />
          )}
      </div>
    </>
  );
};

export default Form;
