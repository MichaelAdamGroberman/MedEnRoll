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
    newState = { ...patientData, newState }

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

    setPatientData(newState);
    console.log(newState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(patientData);

    let newState = {};
    newState = { ...patientData, newState }
    newState = {
      ...newState, 
        address : {
          ...newState['address']
        } , 
        contact: {
          ...newState['contact']
        } 
    };

    const addr = patientData.address||{};
    const contact = patientData.contact||{};
     await updatePatient({
      variables: {
        gender: patientData.gender,
        dob: patientData.dob,
        firstName: patientData.firstName,
        middleName: patientData.middleName,
        lastName: patientData.lastName,
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
        appointments:patientData.appointments
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
          <>
            { getStepsContent(activeStep, patientData ) }
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
            </>
        )}     
        </div> 
    </>
  );
};

export default UserForm;
