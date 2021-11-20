import React, { useState } from 'react';
import '../../styles/Form.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker  from '@mui/lab/DateTimePicker'; 
import { ADD_APPOINTMENT } from '../../utils/mutations';
import { useMutation} from '@apollo/client';

const AppointmentForm = () => {   

/////////////////////////////////////////////////////////////////////////////

  // React Hooks
  // const { data:appointmentData, loading, error } = useQuery(GET_PATIENT, {
  //   // pass URL parameter
  //   variables: { userId: -1 }
  // });

  //if(error) console.log(error);

  var appointmentData = {};

  const [formState, setFormState] = useState(appointmentData || {});
  const [addAppointment] = useMutation(ADD_APPOINTMENT); 
  
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
     await addAppointment({
      variables: {
          appointment: {
          appointmentDateTime: formState.appointmentDateTime,
          duration: parseInt( formState.duration),
          provider: formState.provider,
          description: formState.description
        }
      }
    });
  };
const parentField = null;
  // if(loading)
  //   return <img src={spinner} alt="loading" />;  

  return (  
      <div className="form-container">         
        <form> 
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Appointment Date"
                value={new Date(formState?.appointmentDateTime)}
                onChange={(newDate) => { handleFieldChange("appointmentDateTime", new Date(newDate), parentField); }}
                renderInput={(params) => <TextField 
                  size="small"
                  margin="normal" {...params} />}
              />
            </LocalizationProvider>   

          <TextField 
            label='Duration'
            variant='outlined'
            size="small"
            margin="normal" 
            inputProps={ {value:formState?.duration} }
            onChange={ (event) => { handleFieldChange("duration", event.target.value, parentField); }}
          />
          <TextField 
            label='Medical Provider'
            variant='outlined'
            size="small"
            margin="normal" 
            inputProps={ {value:formState?.provider} } 
            onChange={ (event) => { handleFieldChange("provider", event.target.value, parentField); }}
          />
          <TextField  
            label='Description'
            variant='outlined'
            size="small"
            margin="normal" 
            inputProps={ {value:formState?.description} } 
            onChange={ (event) => { handleFieldChange("description", event.target.value, parentField); }}
          />
          

          <div className="form-footer"> 

              <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                Add Appointment
              </button>
          </div>            
        </form> 
      </div> 
  ); 
};

export default AppointmentForm;
