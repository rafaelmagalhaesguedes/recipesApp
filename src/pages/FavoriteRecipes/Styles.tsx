import styled from 'styled-components';

export const FavoriteRecipesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 360px) {
    width: 360px;
    height: 640px;
  }
`;

export const FavoriteWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 0 100px 0;

  @media screen and (max-width: 360px) {
    width: 360px;
    margin: 0;
    height: 640px;
    padding: 20px 20px 100px 20px;
  }
`;
