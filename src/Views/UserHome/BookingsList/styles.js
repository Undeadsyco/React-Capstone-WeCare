import styled from "styled-components";
import { FlexContainer } from "../../../GlobalSyles/styles";

const BookingsList = styled(FlexContainer)`
  flex-wrap: wrap;

  & .list-container {
    width: 70%;
    height: 60%;
    display: grid;
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    column-gap: 20px;
    justify-content: center;
    overflow-y: auto;

    & .list-item {
      width: 285px;
      height: 290px;
      padding: 10px;
      border: 2px solid black;
      border-radius: 10px;
      text-align: center;
      background-color: black;
      color: white;
      justify-self: center;

      & > h2 {
        margin-bottom: 5px;
      }

      & > h3 {
        font-size: 1.3rem;
        font-weight: 500;
      }

      & > div {
        margin: 10px 0;
      }

      & > button {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        margin: 5px 0;
        font-size: 0.9rem;
        color: white;

        &.reschedule {
          background-color: blue;
        }

        &.cancel {
          background-color: red;
        }
      }
    }
  }

  & .btn-container {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      width: 200px;
      height: 30px;
      border-radius: 10px;
      background-color: blue;

      & > a {
        text-decoration: none;
        color: white;
      }
    }
  }

  & .popup {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      width: 30%;
      height: 25%;
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      background-color: white;
      text-align: center;

      & > h4 {
        width: 100%;
      }

      & > button {
        width: 30%;
        height: 30px;
        margin: 0 5px;
        color: white;
        border-radius: 5px;

        &.green {
          background-color: green;
        }

        &.red {
          background-color: red;
        }
      }
    }
  }
`;

export default BookingsList;
