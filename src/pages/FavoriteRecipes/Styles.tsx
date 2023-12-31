import styled from 'styled-components';

export const FavoriteRecipesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 50px 0;

  @media screen and (max-width: 360px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  @media screen and (max-width: 1920px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;
