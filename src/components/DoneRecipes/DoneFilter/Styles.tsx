import styled from 'styled-components';

export const DoneRecipesFilter = styled.section`
  width: 50%;
  margin: 30px 0 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  img {
    width: 66px;
    border: none;
    background-color: transparent;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    margin: 10px 0 20px 0;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  
    img {
      width: 66px;
      border: none;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px 0 20px 0;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  
    img {
      width: 66px;
      border: none;
      background-color: transparent;
    }
  }
`;
