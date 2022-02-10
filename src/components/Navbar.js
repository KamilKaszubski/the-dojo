import { Link } from 'react-router-dom';

//  styles & logos
import './Navbar.css';
import Temple from '../assets/temple.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Dojo Logo' />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
        <li>
          <Link to='/signup'>Sign up</Link>
        </li>
        <li>
          <button className='btn'>Log out</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
