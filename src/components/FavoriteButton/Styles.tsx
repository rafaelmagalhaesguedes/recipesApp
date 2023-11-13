import styled from 'styled-components';

export const FavButton = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 35px;
  height: 35px;

  &:hover {
    background-color: #df3626;
    margin: 0;
    padding: 0;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;
