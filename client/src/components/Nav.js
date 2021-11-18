import '../styles/Nav.css';
import Auth from "../utils/auth";
import { Link } from 'react-router-dom';
import 'boxicons';

function Nav() { 
    if (Auth.loggedIn()) {      
        return ( 
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
      );
    } 
    else {      
      return ( 
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
                <box-icon name='home' type='solid'></box-icon>
                <span className='links_name'>Home</span>
              </li> 
              <li>
                <box-icon name='wallet-alt' type='solid'></box-icon>
                <span className='links_name'>Sign Up</span>
              </li>
              <li>               
                <Link to="/login">
                  <box-icon name='log-out' type='solid'></box-icon> 
                  <span className='links_name'>Log-In</span> 
                </Link>
              </li>
            </ul>
          </div>
        </div> 
    );
  } 
}

export default Nav;
