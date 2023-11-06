import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 108px;
  border-radius: 10px;
  background: #41197F;
`;

export const SearchBarInput = styled.input`
  width: 338px;
  height: 40px;
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
    align-items: center;
  }

  input {
    cursor: pointer;
  }

  label {
    color: white;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin: 5px;
    cursor: pointer;
  }
`;

export const SearchBarFilterItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonSearch = styled.button`
  width: 210px;
  height: 25px;
  border-radius: 5px;
  text-transform: uppercase;
  color: white;
  border: none;
  background: #FCC436;
  margin-bottom: 13px;
  cursor: pointer;
`;
