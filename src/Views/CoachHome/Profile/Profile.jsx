import ProfileContainer from "./styles"

import Male from '../../../assets/coachM.png';
import Female from '../../../assets/coachF.jpg'

const Profile = ({ coach }) => {
  return (
    <ProfileContainer>
      <div>
        <div className="img-container">
          <img src={coach?.gender === 'Male' ? Male : Female} alt="" />
        </div>
        <div className="info-container">
          <h2>Coach Id: {coach.id}</h2>
          <p>Date of Birth: {coach.dob}</p>
          <p>Phone Number: {coach.phNum}</p>
          <p>Speciality: {coach.speciality}</p>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
