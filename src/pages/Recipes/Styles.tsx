import styled from 'styled-components';

export const ContainerRecipes = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;

  @media screen and (max-width: 359px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 769px) and (max-width: 1366px)) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  @media screen and (min-width: 1367px) and (max-width: 1920px) {
    height: 100vh;
  }

  @media screen and (min-width: 1921px) {
    height: 100vh;
  }
`;

export const Render = styled.div``;

export const LoadingRecipes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
