import { useFormik } from "formik";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import * as yup from 'yup';

import FormContainer from './styles';

const validation = yup.object({
  date: yup.date(),
  slot: yup.string()
})

const BookingForm = ({ submit, getBookings, onReschedule }) => {
  const { state: { userId, coachId, reschedule, bookingId } } = useLocation();
  const [popup, setPopup] = useState(false);

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      date: new Date(),
      slot: '',
    },
    onSubmit: (values) => {
      if (reschedule) {
        onReschedule(bookingId, values).then(res => {
          if (res.date === values.date && res.slot === values.slot) {
            setPopup(true);
            getBookings(res.userId);
          }
        })
      } else {
        const body = {
          userId,
          coachId,
          ...values
        }
  
        submit(body).then(res => {
          if (res.userId && res.coachId) {
            setPopup(true);
            getBookings(res.userId)
          }
        })
      }
    }
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <h2>Proceed with your Appointment</h2>

        <label>
          <div>Date of Appointment:</div>
          <input
            id="date"
            name="date"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        <label className="radio">
          <div>Prefered Slot:</div>
          <input
            id="9-10"
            name="slot"
            type="radio"
            value="9AM to 10AM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>9 AM to 10 AM</span>
          <input
            id="10-11"
            name="slot"
            type="radio"
            value="10AM to 11AM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>10 AM to 11 AM</span>
          <input
            id="11-12"
            name="slot"
            type="radio"
            value="11AM to 12AM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>11 AM to 12 AM</span>
          <input
            id="2-3"
            name="slot"
            type="radio"
            value="2PM to 3PM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>2 PM to 3 PM</span>
          <input
            id="3-4"
            name="slot"
            type="radio"
            value="3PM to 4PM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>3 PM to 4 PM</span>
          <input
            id="4-5"
            name="slot"
            type="radio"
            value="4PM to 5PM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>4 PM to 5 PM</span>
        </label>

        <div className="btn-box">
          <button type="submit">Confirm Appointment</button>
        </div>
      </form>

      <div className="popup" style={popup ? { display: 'flex' } : { display: 'none' }}>
        <div>
          <p>Your appointment has been scheduled successfully</p>
          <button><Link to="/home/user">Go Back</Link></button>
        </div>
      </div>
    </FormContainer>
  );
};

export default BookingForm;
