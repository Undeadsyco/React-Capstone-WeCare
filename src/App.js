import { Outlet, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { Header, Footer, PrivateRoute } from './Components';
import { Home, CoachSignup, UserSignup, CoachLogin, UserLogin, CoachHome, UserHome } from './Views'
import { AppContainer } from "./GlobalSyles/styles";

import { mainActions } from './Actions';

const App = (props) => {
  return (
    <AppContainer>
      <Header isLoggedIn={props.isLoggedIn} loginType={props.loginType} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<PrivateRoute />}>
            <Route path="coach/*" element={<CoachHome />} />
            <Route path="user/*" element={<UserHome />} />
          </Route>
          <Route path='/signup/*' element={<Outlet />}>
            <Route path="coach" element={<CoachSignup submit={props.onCoachSignup} />} />
            <Route path="user" element={<UserSignup submit={props.onUserSignup} />} />
          </Route>
          <Route path="/login/*" element={<Outlet />} >
            <Route path="coach" element={<CoachLogin submit={props.onCoachLogin} />} />
            <Route path="user" element={<UserLogin submit={props.onUserLogin} />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.main.isLoggedIn,
  loginType: state.main.loginType,
})

const mapDispatchToProps = (dispatch) => {
  const { coachSignup, coachLogin, userSignup, userLogin } = mainActions;

  return ({
    onCoachSignup: (body) => coachSignup(body),
    onCoachLogin: (id) => coachLogin(id),
    onUserSignup: (body) => userSignup(body),
    onUserLogin: (id) => userLogin(id),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
