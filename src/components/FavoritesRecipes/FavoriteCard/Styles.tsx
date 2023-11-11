import styled from 'styled-components';

export const CardFavorites = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 100px;
`;

export const CardFav = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.div`
  p {
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }

  img {
    width: 318px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  
  p {
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ButtonsShareFavorite = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const MessageNoFound = styled.p`
  margin: 150px;
`;
