import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import FormUserDetails from './FormUserDetails';
import FormAddressDetails from './FormAddressDetails';
import FormInsuranceDetails from './UserInsuranceDetails';

import { useQuery } from '@apollo/client';
import { GET_PATIENT } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';


const useStyles = makeStyles({
  root: {
    margin: '5px auto',
    width: '100%',
    borderRadius:'5px',
    border: '1px solid white',
    '& .MuiStepIcon-root.MuiStepIcon-active': { color: 'lightblue' },
    '& .MuiStepIcon-root.MuiStepIcon-completed': { color: 'lightblue' },
  },
});
const UserForm = () => {
  // React Hook
  const [activeStep, setActiveStep] = useState(0);

  function getSteps() {
    return ['BASIC INFORMATION', 'ADDRESS', 'INSURANCE'];
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const steps = getSteps();

  function getStepsContent(stepIndex, data) {
    
    switch (stepIndex) {
      case 0:
        return <FormUserDetails data={data?.patient} />;
      case 1:
        return <FormAddressDetails />;
      case 2:
        return <FormInsuranceDetails />;
      default:
        return 'Unknown Step';
    }
  }

  const classes = useStyles();
 
  const { data:patientData, loading } = useQuery(GET_PATIENT, {
    // pass URL parameter
    variables: { userId: -1 }
  });

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
            {getStepsContent(activeStep, patientData)}
            <Button className="btn btn-warning" onClick={handleNext}>{activeStep === steps.length ? 'Finish' : 'Next'}</Button>
          </>
        )}
      </>
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
};

export default UserForm;
