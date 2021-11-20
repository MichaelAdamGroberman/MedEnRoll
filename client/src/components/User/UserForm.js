import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel } from '@material-ui/core';
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

  // React Hooks
  const [activeStep, setActiveStep] = useState(0);
  const { data:patientData, loading, error } = useQuery(GET_PATIENT, {
    // pass URL parameter
    variables: { userId: -1 }
  });

  if(error) console.log(error);

  const [formState, setFormState] = useState(patientData?.patient || {});
  const [updatePatient] = useMutation(UPDATE_PATIENT);
  const classes = useStyles();


  const getSteps = () => { return ['BASIC INFORMATION', 'ADDRESS', 'INSURANCE'];  };
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1);  };  
  const handlePrevious = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
  
  const steps = getSteps();

  const handleFieldChange = (name, value, parentField) => { 

    let newState = {};
    newState = { ...formState, newState }

    if (parentField) {
      newState = {
        ...newState,
        [parentField]: {
          ...newState[parentField],
          [name] :value
        }
      }
    }
    else {
      newState = {
        ...newState, 
          [name] :value 
      }
    }

    setFormState(newState);
    console.log(newState);
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
        address:formState.address,
        contact: formState.contact,
        appointments:formState.appointments
      }
    });
  };

  
  const getStepsContent= (stepIndex, data) =>{
    switch (stepIndex) {
      case 0:
        return <FormUserDetails 
                  formData={data} 
                  handleFieldChange={handleFieldChange} 
                  parentField={null} />
      case 1:
        return <FormAddressDetails 
                  formData={data} 
                  handleFieldChange={handleFieldChange}                   
                  parentField="address" />
      case 2:
        return <FormInsuranceDetails />;
      default:
        return 'Unknown Step';
    }
  }

  if(loading)
    return <img src={spinner} alt="loading" />;  

  return (
    <div className={classes.root}>      
      <div className="form-container">
        <Stepper  activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? ('The Steps Completed') : (
          <form>
            { getStepsContent(activeStep, formState ) }
            <div className="form-footer">
                <button type="button" className="btn btn-info pull-left" onClick={handlePrevious}>
                  Previous
                </button>

                <button type="button" className="btn btn-info pull-right" onClick={handleNext}>
                  {activeStep === steps.length ? 'Finish' : 'Next'}
                </button>

                <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                  Save
                </button>
            </div>            
            </form>
        )}     
        </div> 
    </div>
  );
};

export default UserForm;
