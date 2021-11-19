import './Navbar.css';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import 'boxicons';

function renderNavItem(text, icon, path, action)
{
  return  (
    action?
    <li>
      <a href={path} onClick={action}>
        <box-icon name={icon} type='solid'></box-icon> 
        <span className='links_name'>{text}</span> 
      </a>
    </li>
    :
    <li>               
      <Link to={path}>
        <box-icon name={icon} type='solid'></box-icon> 
        <span className='links_name'>{text}</span> 
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
                <Link to="/">
                  <box-icon type='logo' name='medium-old'></box-icon>
                  MedEnRoll
                </Link>
            </div>
            <box-icon name='menu' className="pull-right"></box-icon>
          </div>          
            { isLoggedIn?
              <ul className='nav_list'>
                { renderNavItem("Dashboard", "grid-alt", "/dashboard") }
                { renderNavItem("Profile", "user-circle", "/profile") }
                { renderNavItem("Appointment", "notepad", "/appointment") }
                { renderNavItem("Insurance", "wallet-alt", "/insurance") } 
                { renderNavItem("Log out", "log-out", "/",() => Auth.logout() ) }  
              </ul>
              :
              <ul className='nav_list'> 
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
