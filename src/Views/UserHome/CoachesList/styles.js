import styled from "styled-components";
import { GridContainer } from "../../../GlobalSyles/styles";

const ListContainer = styled(GridContainer)`
  margin: auto;
  max-height: 100%;
  gap: 20px;
  overflow-y: auto;

  & .search-container {
    position: relative;
    top: 3px;
    grid-column: 1/3;
    justify-self: flex-end;
    align-self: flex-start;

    padding: 0 5px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    align-items: center;

    & > button {
      height: 24px;
      padding: 0;
      margin: 0 5px 0 0;
      border: none;
      background-color: transparent;
    }

    & > input {
      height: 24px;
      border: none;
      outline: none;

      &:focus {
        outline: none;
      }
    }
  }

  & .list-item {
    width: 100%;
    height: 160px;
    border: 2px solid black;
    border-radius: 20px;
    display: flex;
    background-color: black;
    color: white;

    & .img-container {
      width: 40%;

      & > img {
        width: 173px;
        height: 156px;
        border-radius: 15px;
      }
    }

    & .info-container {
      width: 60%;
      padding-left: 15px;

      & > h4 {
        font-weight: 500;
        margin: 5px 0;
      }

      & > p {
        margin: 5px 0;
      }

      & > button {
        width: 60%;
        height: 30px;
        margin: 15px 0;
        border-radius: 10px;
        background-color: blue;
        color: white;

        &:hover {
          cursor: pointer;
        }

        & > a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;

export default ListContainer;
