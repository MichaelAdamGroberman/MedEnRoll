import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import FormUserDetails from './FormUserDetails';
import FormAddressDetails from './FormAddressDetails';
import FormInsuranceDetails from './UserInsuranceDetails';
import spinner from '../../assets/spinner.gif';
import { useQuery, useMutation} from '@apollo/client';
import { GET_PATIENT } from '../../utils/queries';
import { UPDATE_PATIENT } from '../../utils/mutations';

const UserForm = () => {

  // React Hooks     
  const [activeStep, setActiveStep] = useState(0);
  const [patientData, setPatientData] = useState({});   
  const { loading, error, data, refetch  } = useQuery(GET_PATIENT, {
    // pass URL parameter
    variables: { userId: -1 }
  });
  const [formState, setFormState] = useState(patientData || {});
  const [updatePatient] = useMutation(UPDATE_PATIENT); 
  
  useEffect (() => {
    setPatientData( data?.patient);
  }, [data]);

  if(loading) return <img src={spinner} alt="loading" />
  if (error) return (
    <React.Fragment>
      <p>Oops, error! </p> 
      <button onClick={() => refetch()}>Please try again!</button>
    </React.Fragment>
  );


  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1);  };  
  const handlePrevious = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };  
  const steps = ['BASIC INFORMATION', 'ADDRESS', 'INSURANCE']; 

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

    let newState = {};
    newState = { ...formState, newState }
    newState = {
      ...newState, 
        address : {
          ...newState['address']
        } , 
        contact: {
          ...newState['contact']
        } 
    };

    setFormState(newState);
    const addr = formState.address;
    const contact = formState.contact;
     await updatePatient({
      variables: {
        gender: formState.gender,
        dob: formState.dob,
        firstName: formState.firstName,
        middleName: formState.middleName,
        lastName: formState.lastName,
        address: {
          street: addr.street,
          city: addr.city,
          state: addr.state,
          zip: addr.zip
        },
        contact: {
          primaryEmail: contact.primaryEmail,
          alternateEmail: contact.alternateEmail,
          cellPhone: contact.cellPhone,
          homePhone: contact.homePhone,
          workPhone: contact.workPhone
        },
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
        return <FormInsuranceDetails 
                formData={data} 
                handleFieldChange={handleFieldChange}                   
                parentField="contact"/>;
      default:
        return 'Unknown Step';
    }
  }

  return (
    <>      
      <header className="page-header">
        <box-icon name='calendar' className="page-header-icon"  color='rgb(216, 253, 253)' ></box-icon>
        <span> Patient Profile ({(patientData ||{}).firstName })</span>
      </header>
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
    </>
  );
};

export default UserForm;
