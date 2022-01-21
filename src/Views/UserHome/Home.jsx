import { Routes, Route } from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';

import CoachList from './CoachesList/List';
import Profile from './Profile/Profile';
import BookingList from './BookingsList/List';
import BookingForm from './BookingForm/Form';

import { UserActions } from '../../Actions';
import { useEffect } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = (props) => {
  const {
    onGetCoaches, coachList, bookings,
    onMakeAppointment, onGetUserBookings,
    onRescheduleBooking, onCancelBooking, user,
  } = props;

  useEffect(() => {
    onGetCoaches()
    onGetUserBookings(user?.id)
  }, [onGetCoaches, onGetUserBookings, user])

  return (
    <Container>
      <Routes>
        <Route path='/' element={<CoachList list={coachList} userId={user?.id} />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/appointments' element={
          <BookingList list={bookings} cancel={onCancelBooking} />}
        />
        <Route path='/booking' element={
          <BookingForm submit={onMakeAppointment} getBookings={onGetUserBookings} onReschedule={onRescheduleBooking} />}
        />
      </Routes>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.main.user,
  coachList: state.user.coachList,
  bookings: state.user.bookings,
});

const mapDispatchToProps = (dispatch) => {
  const { getCoaches, makeAppointment, getUserBookings, rescheduleBooking, cancelBooking } = UserActions;
  return ({
    onGetCoaches: () => getCoaches().then(data => dispatch({ type: 'GET_COACHES', data })),
    onMakeAppointment: (body) => makeAppointment(body),
    onGetUserBookings: (id) => getUserBookings(id).then(data => dispatch({ type: 'GET_USER_BOOKINGS', data })),
    onRescheduleBooking: (id, body) => rescheduleBooking(id, body),
    onCancelBooking: (id) => cancelBooking(id),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
