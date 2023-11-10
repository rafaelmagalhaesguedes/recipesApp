import styled from 'styled-components';

export const FavoriteRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const FavoriteRecipesButtons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 30px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 5px;
  }

  img {
    width: 66px;
  }

  @media screen and (max-width: 360px) {
    jutify-content: space-between;
    width: 100%;
  }
`;

export const CardFavorites = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 100px;
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
