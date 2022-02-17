import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';

// styles & icons
import './Sidebar.css';
import DashboardIcons from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
// import userEvent from '@testing-library/user-event';

const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink to='/'>
                <img src={DashboardIcons} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='add project icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
