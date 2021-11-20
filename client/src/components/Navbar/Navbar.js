import './Navbar.css';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import 'boxicons';

function renderNavItem(text, icon, path, action)
{
  return  (
    action?
    <li>
      <a href={path} onClick={action} className="nav-link">
        <box-icon name={icon} className="icon" style={{height:'20px',paddingTop:'5px'}} type='solid'></box-icon> 
        {/* <span className='links_name'> */}
          {text}
          {/* </span>  */}
      </a>
    </li>
    :
    <li>               
      <Link  className="nav-link" to={path}>
        <box-icon name={icon} className="icon" style={{height:'20px'}} type='solid'></box-icon> 
        <span className='links_name' style={{paddingBottom:'10px'}}>
          {text}
          </span> 
      </Link>
    </li>
  );
}

function Navbar() { 
    const isLoggedIn = Auth.loggedIn();

    const respLoggedIn = ( 
      <nav className='sidebar'>
        <div className='logo_content'>
          <div className='logo'>
            <div className='logo_name'>
                <Link to="/" className="nav-link">
                  <box-icon type='logo'  name='medium-old'></box-icon>
                  MedEnRoll
                </Link>
            </div>
            {/* <box-icon name='menu' className="pull-right"></box-icon> */}
          </div>          
            { isLoggedIn?
              <ul>
                { renderNavItem("Dashboard", "grid-alt", "/dashboard") }
                { renderNavItem("Profile", "user-circle", "/profile") }
                { renderNavItem("Appointments", "calendar-event", "/appointments") }
                { renderNavItem("Insurance", "wallet-alt", "/insurance") } 
                { renderNavItem("Log out", "log-out", "/",() => Auth.logout() ) }  
              </ul>
              :
              <ul> 
                { renderNavItem("Home", "home", "/") }
                { renderNavItem("Sign Up", "wallet-alt", "/signup") }
                { renderNavItem("Log-In", "log-in", "/login") } 
              </ul>              
            }            
        </div>
      </nav> 
  );
    
  return respLoggedIn;  
}

export default Navbar;
