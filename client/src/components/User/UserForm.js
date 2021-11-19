import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import FormUserDetails from './FormUserDetails';
import FormAddressDetails from './FormAddressDetails';
import FormInsuranceDetails from './UserInsuranceDetails';

import spinner from '../../assets/spinner.gif';
import { useQuery, useMutation} from '@apollo/client';
import { GET_PATIENT } from '../../utils/queries';
import { UPDATE_PATIENT } from '../../utils/mutations';


const useStyles = makeStyles({
  root: {
    margin: '5px auto',
    width: '100%',
    borderRadius:'5px',
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
  
  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const steps = getSteps();
  const classes = useStyles();
 
  const { data:patientData, loading } = useQuery(GET_PATIENT, {
    // pass URL parameter
    variables: { userId: -1 }
  });

  const [formState, setFormState] = useState(patientData?.patient || {});
  const [updatePatient] = useMutation(UPDATE_PATIENT);
 
  const formStateHandler = ()=>{
    return formState;
  }

  const handleFieldChange = (name, value) => { 
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

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

  
  const getStepsContent= (stepIndex, data) =>{
    
    switch (stepIndex) {
      case 0:
        return <FormUserDetails 
                  formData={data} 
                  handleFieldChange={ (name, value)=>{handleFieldChange(name, value);}} 
                  handleFormSubmit={(event)=>{handleFormSubmit(event);}} />
      case 1:
        return <FormAddressDetails 
                  formData={data} 
                  handleFieldChange={ (name, value)=>{handleFieldChange(name, value);}} 
                  handleFormSubmit={(event)=>{handleFormSubmit(event);}} />
      case 2:
        return <FormInsuranceDetails />;
      default:
        return 'Unknown Step';
    }
  }

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
          <div className="form-container">
            { getStepsContent(activeStep, formState ) }

            <Button className="btn btn-warning float-left" onClick={handlePrevious}>
              Previous
            </Button>

            <Button className="btn btn-primary float-right" onClick={handleNext}>
              {activeStep === steps.length ? 'Finish' : 'Next'}
            </Button>

            <button type="button" className="btn btn-primary"
              onClick={handleFormSubmit}
            >Save</button>

          </div>
        )}
      </>
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
};

export default UserForm;
