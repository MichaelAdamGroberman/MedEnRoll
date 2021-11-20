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

const FormAddressDetails =({formData, parentField, handleFieldChange}) => { 
  formData = formData || {}; 
  const data = parentField? formData[parentField]: formData;

  const classes = useStyles();
  return (
    <> 
      <TextField
        className={classes.field}
        label='Street'
        variant='outlined'
        size="small"
        margin="normal" 
        inputProps={ {value:data?.street} }
        onChange={ (event) => { handleFieldChange("address.street", event.target.value, parentField); }}
      />
      <TextField className={classes.field} label='City' variant='outlined' 
        size="small"
        margin="normal" 
        inputProps={ {value:data?.city} }
        onChange={ (event) => { handleFieldChange("city", event.target.value, parentField); }}
      />
      <TextField className={classes.field} label='State' variant='outlined' 
        size="small"
        margin="normal" 
        inputProps={ {value:data?.state} }
        onChange={ (event) => { handleFieldChange("state", event.target.value, parentField); }}
      />
      <TextField className={classes.field} label='Zip' variant='outlined' 
        size="small"
        margin="normal" 
        inputProps={ {value:data?.field} }
        onChange={ (event) => { handleFieldChange("zip", event.target.value, parentField); }}
      />
    </> 
  );
};

export default FormAddressDetails;
