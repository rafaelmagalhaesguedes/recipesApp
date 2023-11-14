import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
  gap: 10px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    border-radius: 10px;
    background: #41197F;
    margin: 0;
  }

  @media screen and (min-width: 769px) and (max-width: 1174px) {
    margin: 0 20px;
  }
`;

export const SearchBarInput = styled.input`
  width: 400px;
  height: 35px;
  border-radius: 5px;
  border: 0.5px solid #c0c0c0;
  padding: 0 20px;
  color: #41197F;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;

  &::placeholder {
    color: #B1B1B1;
  }

  &:focus {
    outline: none;
    border: 1px solid #41197F;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 35px;
    border-radius: 5px;
    border: 0.5px solid #c0c0c0;
    padding: 20px;
    margin-top: 20px;
    color: #41197F;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.05em;
  
    &::placeholder {
      color: #B1B1B1;
    }
  
    &:focus {
      outline: none;
      border: 1px solid #41197F;
    }
  }
`;

export const SearchBarFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  input {
    cursor: pointer;
  }

  label {
    color: white;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
    width: 100%;
  } 
`;

export const ButtonSearch = styled.button`
  width: 100px;
  height: 30px;
  background-color: #df3626;
  border-radius: 5px;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  border: 1px solid #df3626;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 35px;
  }
`;
