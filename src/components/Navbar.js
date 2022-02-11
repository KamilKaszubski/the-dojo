import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

//  styles & logos
import './Navbar.css';
import Temple from '../assets/temple.svg';

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Dojo Logo' />
          <span>The Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Log in</Link>
            </li>
            <li>
              <Link to='/signup'>Sign up</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className='btn' onClick={logout}>
                Log out
              </button>
            )}
            {isPending && (
              <button className='btn' disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
