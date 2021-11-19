import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PATIENT } from '../../utils/mutations';
import '../../styles/Form.css';
import { makeStyles } from '@material-ui/core/styles';
import {  TextField} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    display: 'grid',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 5,
  },
  formContainer: {
    position: 'relative',
    width: '28',
    height: 'auto',
    padding: '10px',
  },
  field:{ 
    width: '100%', 
    margin: '5px 0',
    borderColor:'white !important'    
  }
});

const FormUserDetails = ({data}) => { 
  const [formState, setFormState] = useState(data || {});
  const [updatePatient] = useMutation(UPDATE_PATIENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
     await updatePatient({
      variables: {
        gender: formState.gender,
        dob: formState.dob,
        firstName: formState.firstName,
        middleName: formState.middleName,
        lastName: formState.lastName,
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const classes = useStyles();
  return (     
  
  <form onSubmit={handleFormSubmit}>
    <div className="form-container">
        <TextField 
          className={classes.field}
          label='First Name'
          variant='outlined'
          name="firstName"
          id="firstName"
          inputProps={ {value:formState.firstName} }
          onChange={handleChange}
        />
        <TextField 
          className={classes.field}
          label='Middle Name'
          variant='outlined'
          name="middleName"
          id="middleName"
          inputProps={ {value:formState.middleName} } 
          onChange={handleChange}
        />
        <TextField 
          className={classes.field}
          label='Last Name'
          variant='outlined'
          name="lastName"
          id="lastName" 
          inputProps={ {value:formState.lastName} } 
          onChange={handleChange}
        />
        <TextField 
          className={classes.field}
          label='Date of Birth'
          variant='outlined'
          name="dob"
          id="dob"
          inputProps={ {value:formState.dob} } 
          onChange={handleChange}
        />
        <TextField
          className={classes.field}
          label='Gender'
          variant='outlined'
          name="gender"
          id="gender"
          inputProps={ {value:formState.gender} } 
          onChange={handleChange}
        />

        <div className="flex-row flex-end text-center">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  );
};

export default FormUserDetails;
