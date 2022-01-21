import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import AppointmentsList from "./AppointmentsList/List";
import Profile from "./Profile/Profile";
import { FlexContainer } from '../../GlobalSyles/styles';

import { CoachActions } from '../../Actions';

const Container = styled(FlexContainer)``;

const Home = (props) => {
  const { onGetAppointments, coach, appoinments } = props;

  useEffect(() => {
    onGetAppointments(coach?.id)
  }, [onGetAppointments, coach]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppointmentsList list={appoinments} />} />
        <Route path="/profile" element={<Profile coach={coach} />} />
        <Route path="/appointments" element={<AppointmentsList list={appoinments} />} />
      </Routes>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  coach: state.main.coach,
  appoinments: state.coach.appoinments
});

const mapDispatchToProps = (dispatch) => {
  const { getAppointments } = CoachActions;
  return ({
    onGetAppointments: (id) => getAppointments(id).then(data => dispatch({ type: 'GET_COACH_APPOINTMENTS', data }))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
