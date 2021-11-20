import React, { useState, useEffect } from 'react';
import AppointmentForm from "../components/Appointment/AppointmentForm";
import AppointmentList from "../components/Appointment/AppointmentList";
import spinner from '../assets/spinner.gif';
import { useQuery} from '@apollo/client';
import { GET_PATIENT } from '../utils/queries';
import 'boxicons';

function Appointments() {
  // React Hooks    

  const [appointments, setAppointments] = useState([]);   
  const [patientData, setPatientData] = useState({});   
  const { loading, error, data, refetch  } = useQuery(GET_PATIENT, {
    // pass URL parameter
    variables: { userId: -1 }
  });
  
  useEffect (() => {
    setAppointments( data?.patient?.appointments);
    setPatientData( data?.patient);
  }, [data]);


  if(loading) return <img src={spinner} alt="loading" />
  if (error) return (
    <React.Fragment>
      <p>Oops, error! </p> 
      <button onClick={() => refetch()}>Please try again!</button>
    </React.Fragment>
  );

  return (
    <>
      <header className="page-header">
        <box-icon name='calendar' className="page-header-icon"  color='rgb(216, 253, 253)' ></box-icon>
        <span> Patient Appointments ({patientData?.firstName })</span>
      </header>
      <AppointmentForm handleAfterSave={refetch}></AppointmentForm>
      <AppointmentList patientData={data}></AppointmentList>
    </>
  );
}

export default Appointments;