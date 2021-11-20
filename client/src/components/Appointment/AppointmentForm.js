import React, { useState } from 'react';
import '../../styles/Form.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker  from '@mui/lab/DateTimePicker'; 
import { ADD_APPOINTMENT } from '../../utils/mutations';
import { useMutation} from '@apollo/client';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AppointmentForm = ({handleAfterSave}) => {   

/////////////////////////////////////////////////////////////////////////////

  const appointmentData = {
    appointmentDateTime: new Date()
  };

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
    setFormState(appointmentData);
    if(handleAfterSave) 
      handleAfterSave();      
  };


const parentField = null;
  // if(loading)
  //   return <img src={spinner} alt="loading" />;  

  return (  
      <div className="form-container">
        <Stack direction="row" spacing={1}>
          <Item> 
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
          </Item>
          <Item>
            <FormControl sx={{width: 180 }} margin="normal" >
              <InputLabel id="duration-label">Duration</InputLabel>
              <Select 
                labelId="duration-label"
                value={formState?.duration||''}
                label="Duration"
                size="small"
                onChange={(event) => { handleFieldChange("duration", event.target.value, parentField); }}
              >
                <MenuItem value={0}>Not Selected</MenuItem>
                <MenuItem value={30}>30 mins</MenuItem>
                <MenuItem value={45}>45 mins</MenuItem>
                <MenuItem value={60}>1 hr</MenuItem>
                <MenuItem value={120}>2 hrs</MenuItem>
                <MenuItem value={180}>3 hrs</MenuItem>
              </Select>
            </FormControl>
          </Item>
          <Item>
            <TextField 
              label='Medical Provider'
              variant='outlined'
              size="small"
              margin="normal" 
              inputProps={ {value:formState?.provider} } 
              onChange={ (event) => { handleFieldChange("provider", event.target.value, parentField); }}
            />
          </Item>
          </Stack>
          <TextField  
              label='Description'
              variant='outlined'
              size="small"
              margin="normal" 
              multiline
              rows={3}
              fullWidth 
              inputProps={ {value:formState?.description} } 
              onChange={ (event) => { handleFieldChange("description", event.target.value, parentField); }}
            />            
            <div className="form-footer text-center">
              <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                  Add Appointment
              </button>
            </div>
      </div> 
  ); 
};

export default AppointmentForm;
