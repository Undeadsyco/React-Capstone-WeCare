import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaPhoneAlt } from 'react-icons/fa';

const Header = ({ isLoggedIn, loginType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentCoach');
    navigate('/')
  }

  const navigation = () => {
    switch (loginType) {
      case 'coach':
        return (
          <nav>
            <Link to="/home/coach/profile">View Profile</Link>
            <Link to="/home/coach/appointments">My Schedule</Link>
            <address>
              <FaPhoneAlt color="white" />
              Call Us: 080 2233447
            </address>
            <button type="button" onClick={() => logout()}>Logout</button>
          </nav>
        )
      case 'user':
        return (
          <nav>
            <Link to="/home/user/profile">View Profile</Link>
            <Link to="/home/user/appointments">My Appointments</Link>
            <address>
              <FaPhoneAlt color="white" />
              Call Us: 080 2233447
            </address>
            <button type="button" onClick={() => logout()}>Logout</button>
          </nav>
        )
      default:
        return (
          <nav>
            <address>
              <FaPhoneAlt color="white" />
              Call Us: 080 2233447
            </address>
          </nav>
        )
    }
  }

  return (
    <div className="header">
      <h2>WeCare</h2>
      {navigation()}
    </div>
  );
};

export default Header;