import React from 'react'; 
import '../../styles/Form.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    padding: '10px',
  },
  field:{ 
    margin: '5px 5px',
    borderColor:'white !important'    
  }
});

const FormUserDetails = ({formData, handleFormSubmit, handleFieldChange}) => {  
  formData = formData || {};
  const classes = useStyles();
  return (   
    <form>
        <TextField 
          className={classes.field}
          label='First Name'
          variant='outlined'
          size="small"
          margin="normal" 
          inputProps={ {value:formData?.firstName} }
          onChange={ (event) => { handleFieldChange("firstName", event.target.value); }}
        />
        <TextField 
          className={classes.field}
          label='Middle Name'
          variant='outlined'
          size="small"
          margin="normal" 
          inputProps={ {value:formData?.middleName} } 
          onChange={ (event) => { handleFieldChange("middleName", event.target.value); }}
        />
        <TextField 
          className={classes.field}
          label='Last Name'
          variant='outlined'
          size="small"
          margin="normal" 
          inputProps={ {value:formData?.lastName} } 
          onChange={ (event) => { handleFieldChange("lastName", event.target.value); }}
        />
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={formData?.dob}
              onChange={(newDate) => { handleFieldChange("dob", new Date(newDate)); }}
              renderInput={(params) => (
                <TextField 
                size="small"
                margin="normal" 
                {...params} helperText={params?.inputProps?.placeholder} />
              )}
            />
          </LocalizationProvider>      

          <FormControl sx={{width: 180 }} margin="normal" >
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              className={classes.field}
              labelId="demo-simple-select-autowidth-label"
              value={formData?.gender}
              label="Gender"
              size="small"
              onChange={(event) => { handleFieldChange("gender", event.target.value); }}
            >
              <MenuItem value={'NotSpecified'}>Not Specified</MenuItem>
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>
    </form> 
  );
};

export default FormUserDetails;
