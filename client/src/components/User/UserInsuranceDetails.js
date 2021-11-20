import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField} from '@material-ui/core';

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

const FormInsuranceDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.formContainer}>
        <form>
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Provider'
            variant='outlined'
          />
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Name of Insured'
            variant='outlined'
          />
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Insurance Id'
            variant='outlined'
          />

          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Group Number'
            variant='outlined'
          />
        </form>
      </div>
    </div>
  );
};

export default FormInsuranceDetails;
