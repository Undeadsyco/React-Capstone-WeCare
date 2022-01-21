import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import BookingsList from "./styles";

const BookingList = ({ list, cancel }) => {
  const navigate = useNavigate();

  const [cols, setCols] = useState(1);
  const [id, setId] = useState(undefined);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (list.length >= 3) {
      setCols(3);
      return;
    } else if (list.length === 2) {
      setCols(2);
      return;
    }
  }, [list])

  const reschedule = (bookingId) => {
    navigate('/home/user/booking', { state: { reschedule: true, bookingId } })
  }

  const cancelBooking = (bookingId, responce) => {
    if (responce) {
      cancel(bookingId).then(res => {
        if (res.id !== bookingId) {
          alert('booking was successfully canceled');
          navigate('/home/user')
        }
      })
    }
    setPopup(true);
    setId(bookingId);
  }

  return (
    <BookingsList cols={cols}>
      <div className="list-container">
        {list?.map(item => (
          <div key={v4()} className="list-item">
            <h2>Appointment Date:<br /> {item.date}</h2>
            <h3>Slot: {item.slot}</h3>
            <div>
              <p>Booking Id: {item.id}</p>
              <p>User Id: {item.userId}</p>
              <p>Coach Id: {item.coachId}</p>
            </div>
            <button onClick={() => reschedule(item.id)} className="reschedule">Reschedule Appointment</button>
            <button onClick={() => cancelBooking(item.id)} className="cancel">Cancel Appointment</button>
          </div>
        ))}
      </div>
      <div className="btn-container">
        <button>
          <Link to="/home/user">Go Back</Link>
        </button>
      </div>

      <div style={popup ? { display: 'flex' } : { display: 'none' }} className="popup">
        <div>
          <h4>Are you sure you want to cancel your booking</h4>
          <button onClick={() => cancelBooking(id, true)} className="green">Yes</button>
          <button onClick={() => setPopup(false)} className="red">No</button>
        </div>
      </div>
    </BookingsList>
  );
};

export default BookingList;
