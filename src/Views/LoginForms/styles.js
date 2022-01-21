import styled from 'styled-components';
import { FlexContainer } from '../../GlobalSyles/styles';

const LoginContainer = styled(FlexContainer)`
  & .form{
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: black;
    color: white;

    & .img-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-bottom: 20px;

      & > img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }

    & > label {
      & > input {
        width: 100%;
        height: 35px;
        margin: 10px 0;
        border-radius: 5px;
      }

      & .err {
        font-size: 0.75rem;
        color: red;
      }
    }

    & .btn-container {
      margin-top: 30px;

      & > button {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        background-color: blue;
        color: white;
      }
    }
  }
`;

export default LoginContainer;
