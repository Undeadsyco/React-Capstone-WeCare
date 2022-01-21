import { useEffect, useState } from 'react';
import { GrSchedules } from 'react-icons/gr';
import { v4 } from 'uuid';
import ListContainer from './styles';

const AppointmentsList = ({ list }) => {
  const [cols, setCols] = useState(1);

  useEffect(() => {
    if (list?.length >= 3) {
      setCols(3);
    } else if (list?.length === 2) {
      setCols(2);
    }
  }, [list])

  return (
    <ListContainer cols={cols}>
      {list?.length === 0 ? (
        <div className="filler">
          <GrSchedules size={60} /><br />
          <h1>No Planned Appointments Yet!</h1>
        </div>
      ) : (
        <div className='list-container'>
          {list?.map(item => (
            <div key={v4()} className="list-item">
              <h2>Appointment Date:<br /> {item.date}</h2>
              <h4>Slot: {item.slot}</h4>
              <div>
                <p>Booking Id: {item.id}</p>
                <p>User Id: {item.userId}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </ListContainer>
  );
};

export default AppointmentsList;
