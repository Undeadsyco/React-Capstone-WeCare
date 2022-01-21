import styled from "styled-components";
import { FlexContainer } from "../../../GlobalSyles/styles";

const ListContainer = styled(FlexContainer)`
  & .filler {
    width: 30%;
    padding: 20px;
    margin-top: 50px;
    border-radius: 20px;
    align-self: flex-start;
    text-align: center;
    background-color: #aaa;

    & > h1 {
      width: 100%;
      margin-top: 20px;
      font-weight: 500;
    }
  }

  & .list-container {
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    color: white;
    text-align: center;

    & .list-item {
      width: 300px;
      height: 200px;
      border-radius: 20px;
      background-color: black;
      justify-self: center;

      & > h4 {
        margin: 5px 0 10px;
        font-size: 1.2rem;
        font-weight: 500;
      }

      & > div {
        margin: 25px 0;
      }
    }
  }
`;

export default ListContainer;
