import styled from 'styled-components';

export const ContainerRecipes = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

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

export const Render = styled.div``;

export const LoadingRecipes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
