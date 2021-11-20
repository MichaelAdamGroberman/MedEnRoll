import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {  TextField } from '@material-ui/core';

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
    padding: '2rem',
  },
  field:{ 
    margin: '5px 5px',
    borderColor:'white !important'    
  }
});

const FormAddressDetails =({formData, handleFormSubmit, handleFieldChange}) => { 
  formData = formData || {}; 
  const classes = useStyles();
  return (
    <form> 
      <TextField
        className={classes.field}
        label='Street'
        variant='outlined'
        size="small"
        margin="normal" 
        inputProps={ {value:formData?.street} }
        onChange={ (event) => { handleFieldChange("street", event.target.value); }}
      />
      <TextField className={classes.field} label='City' variant='outlined' 
        size="small"
        margin="normal" 
        inputProps={ {value:formData?.city} }
        onChange={ (event) => { handleFieldChange("city", event.target.value); }}
      />
      <TextField className={classes.field} label='State' variant='outlined' 
        size="small"
        margin="normal" 
        inputProps={ {value:formData?.state} }
        onChange={ (event) => { handleFieldChange("state", event.target.value); }}
      />
      <TextField className={classes.field} label='Zip' variant='outlined' 
        size="small"
        margin="normal" 
        inputProps={ {value:formData?.field} }
        onChange={ (event) => { handleFieldChange("zip", event.target.value); }}
      />
    </form> 
  );
};

export default FormAddressDetails;
