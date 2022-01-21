import { BiSearchAlt2 } from 'react-icons/bi';

import ListContainer from './styles';

import Male from '../../../assets/coachM.png';
import Female from '../../../assets/coachF.jpg';
import { useNavigate } from 'react-router-dom';

const CoachList = ({ list, userId }) => {
  const navigate = useNavigate();

  const makeBooking = (coachId) => {
    navigate('/home/user/booking', { state: { userId, coachId }})
  }

  return (
    <ListContainer className='multiCols' width="70%" cols={2} >
      <div className='search-container'>
        <button><BiSearchAlt2 size={20} /></button>
        <input placeholder='Search for speciality' />
      </div>

      {list?.map(item => (
        <div className='list-item'>
          <div className='img-container'>
            <img src={item.gender === 'Male' ? Male : Female} alt=""/>
          </div>
          <div className='info-container'>
            <h4>{item.name}</h4>
            <p>Coach Id: {item.id}</p>
            <address>
              Phone Number: {item.phNum} <br />
              speciality: {item.speciality}
            </address>
            <button onClick={() => makeBooking(item.id)}>Book An Appointment</button>
          </div>
        </div>
      ))}
    </ListContainer>
  );
};

export default CoachList;
