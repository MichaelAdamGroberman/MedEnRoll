import './Profile.css';
function Profile() {
  return (
    <div>
      <div className='sidebar'>
        <div className='logo_content'>
          <div className='logo'>
            <div className='logo_name'>
              <box-icon type='logo' name='medium-old'></box-icon>
              MedEnRoll
            </div>
            <box-icon name='menu'></box-icon>
          </div>
          <ul className='nav_list'>
            <li>
              <box-icon name='grid-alt'></box-icon>
              <span className='links_name'>Dashboard</span>
            </li>
            <li>
              <box-icon name='home' type='solid'></box-icon>
              <span className='links_name'>Home</span>
            </li>
            <li>
              <box-icon name='notepad' type='solid'></box-icon>
              <span className='links_name'>Appointment</span>
            </li>
            <li>
              <box-icon name='wallet-alt' type='solid'></box-icon>
              <span className='links_name'>Insurance</span>
            </li>
            <li>
              <box-icon name='log-out' type='solid'></box-icon>
              <span className='links_name'>Log-out</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='body'>
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
