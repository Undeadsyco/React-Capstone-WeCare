import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  & .header {
    height: 10%;
    padding: 0 20px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > nav {
      display: flex;
      font-size: 0.9rem;

      & > a {
        margin: 0 10px;
        color: white;
        text-decoration: none;
        
        &:hover {
          color: blue;
        }
      }
      & > address {
        margin: 0 10px;
        display: flex;
        align-items: center;
      }
      & > button {
        margin: 0 10px;
        border: none;
        background-color: transparent;
        color: white;
        font-size: 0.9rem;

        &:hover {
          cursor: pointer;
          color: blue;
        }
      }
    }
  }

  & .body {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .footer {
    height: 5%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
  }
`;

export const GridContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: grid;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};

  &.multiCols {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${props => props.rows};
  }

  &.multiRows {
    grid-template-columns: ${props => props.cols};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.multiGrid {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.nested {
    grid-column: ${props => props.colSpan};
    grid-row: ${props => props.rowSpan};
  }
`;

export const FlexContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};

  &.nested {
    grid-column: ${props => props.colSpan};
    grid-row: ${props => props.rowSpan};
  }
`;