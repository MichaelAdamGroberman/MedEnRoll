import '../styles/Nav.css';
import Auth from "../utils/auth";
import { Link } from 'react-router-dom';
import 'boxicons';

function Nav() { 
    if (Auth.loggedIn()) {      
        return ( 
          <nav className='sidebar'>
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
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                    <box-icon name='log-out' type='solid'></box-icon> 
                    <span className='links_name'>Log-out</span> 
                  </a>
                </li>
              </ul>
            </div>
          </nav> 
      );
    } 
    else {      
      return ( 
        <nav className='sidebar'>
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
                <Link to="/">
                  <box-icon name='home' type='solid'></box-icon>
                  <span className='links_name'>Home</span>
                </Link>
              </li> 
              <li>
                <Link to="/signup">
                  <box-icon name='wallet-alt' type='solid'></box-icon>
                  <span className='links_name'>Sign Up</span>
                </Link>
              </li>
              <li>               
                <Link to="/login">
                  <box-icon name='log-in' type='solid'></box-icon> 
                  <span className='links_name'>Log-In</span> 
                </Link>
              </li>
            </ul>
          </div>
        </nav> 
    );
  } 
}

export default Nav;
