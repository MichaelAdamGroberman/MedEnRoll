import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core';

import FormUserDetails from './FormUserDetails';
import FormAddressDetails from './FormAddressDetails';
import FormInsuranceDetails from './UserInsuranceDetails';

const useStyles = makeStyles({
  root: {
    margin: '6rem auto',
    width: '80%',
    border: '1px solid black',
    '& .MuiStepIcon-root.MuiStepIcon-active': { color: 'lightblue' },
    '& .MuiStepIcon-root.MuiStepIcon-completed': { color: 'lightblue' },
  },
});
const UserForm = () => {
  // React Hook
  const [activeStep, setActiveStep] = useState(0);

  function getSteps() {
    return ['USER', 'ADDRESS', 'INSURANCE'];
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FormUserDetails />;
      case 1:
        return <FormAddressDetails />;
      case 2:
        return <FormInsuranceDetails />;
      default:
        return 'Unknown Step';
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          'The Steps Completed'
        ) : (
          <>
            {getStepsContent(activeStep)}

            <Button onClick={handleNext}>{activeStep === steps.length ? 'Finish' : 'Next'}</Button>
          </>
        )}
      </>
    </div>
  );
};

export default UserForm;
