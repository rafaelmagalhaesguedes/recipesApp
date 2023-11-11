import styled from 'styled-components';

export const ContainerDoneRecipes = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 360px) {
    width: 360px;
    height: 640px;
  }
`;

export const Wrapper = styled.div`
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
