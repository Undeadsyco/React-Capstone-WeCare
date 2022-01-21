import styled from "styled-components";
import { FlexContainer } from "../../../GlobalSyles/styles";

const ProfileContainer = styled(FlexContainer)`
  width: 45%;
  height: 60%;
  border-radius: 20px;
  background-color: black;
  color: white;

  & .img-container {
    width: 40%;
    & > img {
      border-radius: 50%;
    }
  }

  & .info-container {
    width: 60%;
    text-align: right;

    & .info {
      text-align: left;
      & > p {

      }
    }

    & > button {
      width: 40%;
      height: 30px;
      margin: 20px 10px;
      border-radius: 5px;
      background-color: blue;

      & > a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export default ProfileContainer;
