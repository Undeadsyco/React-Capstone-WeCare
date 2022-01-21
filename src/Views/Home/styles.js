import styled from "styled-components";
import { GridContainer } from "../../GlobalSyles/styles";

const HomeContainer = styled(GridContainer)`
  column-gap: 40px;
  & > h1 {
    grid-column: 1/3;
    text-align: center;
  }

  & > div {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    
    & > div {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background-color: black;

      & .image-container {
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
          height: 90%;

        }
      }

      & .btn-container {
        padding: 20px 10px;

        & > button {
          width: 100%;
          height: 30px;
          margin: 10px 0;
          border-radius: 10px;
          background-color: rgb(20, 177, 224);
          color: white;

          & > a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

export default HomeContainer;