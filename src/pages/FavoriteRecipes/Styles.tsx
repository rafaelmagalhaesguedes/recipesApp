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
    flex-direction: column;
  }
`;
