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
});

const FormAddressDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.formContainer}>
        <form>
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Street'
            variant='outlined'
          />
          <TextField style={{ width: '100%', margin: '1rem 0' }} label='Apt' variant='outlined' />
          <TextField style={{ width: '100%', margin: '1rem 0' }} label='City' variant='outlined' />
          <TextField style={{ width: '100%', margin: '1rem 0' }} label='State' variant='outlined' />
          <TextField style={{ width: '100%', margin: '1rem 0' }} label='Zip' variant='outlined' />
        </form>
      </div>
    </div>
  );
};

export default FormAddressDetails;
