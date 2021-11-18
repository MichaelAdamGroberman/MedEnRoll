import './Profile.css';
import Navbar from '../components/Navbar/Navbar';

function Profile() {
  return (
    <div>
      <Navbar />
      <div className='profile_body'>
        <h1>Welcome</h1>
        <div className='body_btn'>
          <button>User info</button>
          <button>Insurance info</button>
          <button>Appointment</button>
          <button>Doctor Info</button>
        </div>
        <div className='upcoming_appointment'>
          <h3>Upcoming Appointments</h3>
          <div className='appointment_card'>
            <ul>
              <li>
                <div className='title'>Appointment Title</div>
              </li>
              <li>
                <div className='date'>Appointment Date & Time</div>
              </li>
            </ul>
          </div>
          <div className='appointment_card'>
            <ul>
              <li>
                <div className='title'>Appointment Title</div>
              </li>
              <li>
                <div className='date'>Appointment Date & Time</div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Schedule Appointment</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
