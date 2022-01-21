import styled from "styled-components";
import { FlexContainer } from "../../GlobalSyles/styles";

const FormContainer = styled(FlexContainer)`
  & .coach {
    height: 80%;
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 10px;
    padding: 20px;

    & .heading-container {
      grid-column: 1/3;
      display: flex;
      justify-content: center;

      & > img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }

    & > label {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      & > div {
        width: 100%;
      }

      & > input {
        width: 100%;
        height: 40%;
      }

      & .radio {
        width: 10%;
        height: 25%;
      }

      & .errors {
        color: red;
        font-size: 0.75rem;
      }
    }

    & .btn-container {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;

      & > button {
        width: 50%;
        height: 30px;
        border-radius: 10px;
        background-color: green;
        color: white;
      }
    }
  }

  & .popup {
    width: 30%;
    height: 50%;
    border: 2px solid white;
    position: absolute;
    z-index: 10;
    background-color: black;
    color: white;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & .popup-img {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      & > img {
        width: 112px;
        height: 112px;
      }
    }

    & .popup-btn {
      width: 100%;
      height: 60%;
      padding: 20px;
      text-align: center;

      & > button {
        width: 30%;
        height: 30px;
        margin-top: 20px;
        border-radius: 5px;
        background-color: blue;

        & > a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  & .user {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: black;
    color: white;
    display: grid;
    column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);

    & .img-container {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;

      & > img {
        width: 40px;
        height: 40px;
      }
    }

    & > label {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      & > div {
        width: 100%;
      }

      & > input {
        width: 100%;
        height: 45%;
      }

      &.radio {
        & > input {
          width: 15px;
          height: 15px;
          margin: 0 5px 0 10px;
        }
      }

      & .err {
        font-size: 0.75rem;
        color: red;
      }
    }

    & .btn-container {
      grid-column: 1/3;
      text-align: center;
      padding: 15px;

      & > button {
        width: 50%;
        height: 25px;
        border-radius: 5px;
        background-color: green;
        color: white;
      }
    }
  }
`;

export default FormContainer;
