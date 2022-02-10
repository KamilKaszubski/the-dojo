import { NavLink } from 'react-router-dom';


// styles & icons
import './Sidebar.css'
import DashboardIcons from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-content">
                 <div className="user">
                     {/* avatar, user name here later  */}
                     <p>Hey User</p>
                 </div>
                 <nav className='links'>
                    <ul>
                         <li>
                            <NavLink to='/'>
                              <img src={DashboardIcons} alt="dashboard icon" />
                             <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>
                              <img src={AddIcon} alt="add project icon" />
                             <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                 </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;