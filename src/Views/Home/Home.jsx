import HomeContainer from "./styles";

import Coach from '../../assets/coachImg.png'
import User from '../../assets/userImg.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer className="multiCols" width="50%" cols={2} rows="25% 75%">
      <h1>We are at the heart of appropriate care</h1>

      <div>
        <div>
          <div className="image-container">
            <img src={Coach} alt="Default coach"/>
          </div>
          <div className="btn-container">
            <button><Link to="/login/coach">Login as a Coach</Link></button>
            <button><Link to="/signup/coach">Join as a Coach</Link></button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="image-container">
            <img src={User} alt="Default user"/>
          </div>
          <div className="btn-container">
            <button><Link to="/login/user">Login as a User</Link></button>
            <button><Link to="/signup/user">Join as a User</Link></button>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
