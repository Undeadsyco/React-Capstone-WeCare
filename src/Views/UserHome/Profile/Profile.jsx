import { Link } from 'react-router-dom';

import ProfileContainer from './styles';

import Male from '../../../assets/coachM.png';
import Female from '../../../assets/coachF.jpg';

const Profile = ({ user }) => {
  return (
    <ProfileContainer>
      <div className='img-container'>
        <img src={user.gender === 'Male' ? Male : Female} alt="" />
      </div>
      <div className='info-container'>
        <div className='info'>
          <h2>{user.name}</h2>
          <p>Date of Birth: {user.dob}</p>
          <p>Eamil: {user.email}</p>
          <p>Phone Number: {user.phNum}</p>
          <p>Address: {user.city} {user.state}, {user.country}</p>
          <p>Zip: {user.zipcode}</p>
        </div>
        <button><Link to='/home/user'>Go Back</Link></button>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
