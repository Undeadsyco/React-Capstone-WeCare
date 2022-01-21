import styled from 'styled-components';
import { FlexContainer } from '../../../GlobalSyles/styles';

const ProfileContainer = styled(FlexContainer)`
  & > div {
    width: 40%;
    height: 45%;
    padding: 20px;
    border-radius: 20px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;

    & .img-container {
      width: 40%;
      height: 100%;

      & > img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
      }
    }

    & .info-container {
      width: 60%;
      height: 100%;
      padding: 20px 0;

      & > h2 {
        margin-bottom: 15px;
      }
    }
  }
`;

export default ProfileContainer;
