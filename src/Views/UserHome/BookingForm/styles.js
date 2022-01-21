import styled from "styled-components";
import { FlexContainer } from "../../../GlobalSyles/styles";

const FormContainer = styled(FlexContainer)`
  width: 40%;
  height: 60%;
  padding: 20px;
  border-radius: 20px;
  background-color: black;
  color: white;

  & > form {
    & > h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    & > label {
      width: 100%;

      & > div {
        width: 100%;
      }

      & > input {
        width: 100%;
        margin-bottom: 10px;
      }

      &.radio {
        & > input {
          width: 15px;
          height: 15px;
          margin: 0 5px;
        }

        & > span {
          font-size: 0.9rem;
          margin-right: 30px;
        }
      }
    }

    & .btn-box {
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      & > button {
        width: 40%;
        height: 30px;
      }
    }
  }

  & .popup {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);

    & > div {
      width: 40%;
      height: 30%;
      border: 2px solid white;
      border-radius: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: black;

      & > p {
        font-size: 1.25rem;
        width: 100%;
        text-align: center;
      }

      & > button {
        width: 30%;
        height: 30px;
        border-radius: 10px;
        background-color: blue;

        & > a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;

export default FormContainer;