import React from 'react';
import '../../styles/Form.css';
import { DataGrid } from '@mui/x-data-grid';
import Moment from 'moment';

const AppointmentList = ({patientData}) => {    
  /////////////////////////////////////////////////////////////////////////////
 if(!patientData) return <div>Loading...</div>;
  const columns = [
      { field: 'apptDate', headerName: 'Date & Time', width: 250 }, 
      { field: 'duration', headerName: 'Duration', width: 150 }, 
      { field: 'provider', headerName: 'Provider', width: 200 }, 
      { field: 'description', headerName: 'Descrption', width: 250 }
    ];

    Moment.locale('en'); 
    const apptList = patientData?.patient?.appointments ||[];
    let rows = apptList.map(appt => { 
      var aptRow = { 
          ...appt, 
          id: appt._id,
          apptDate: Moment(appt.appointmentDateTime).format('MMM d, yyyy hh:mm')
        };
      return aptRow;
    });


  return (  
      <div className="form-container">         
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div> 
  ); 
};

export default AppointmentList;
