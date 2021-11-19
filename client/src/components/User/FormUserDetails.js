import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Grid,
  Checkbox,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
} from '@material-ui/core';

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

const FormUserDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.formContainer}>
        <form>
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Date of Birth'
            variant='outlined'
          />
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Gender'
            variant='outlined'
          />
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label='Occupation'
            variant='outlined'
          />
        </form>
      </div>
    </div>
  );
};

export default FormUserDetails;
