import styled from 'styled-components';

export const CardFavorites = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap: 1rem;
  }
`;

export const CardFav = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #B1B1B1;
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
