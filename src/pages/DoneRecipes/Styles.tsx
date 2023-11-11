import styled from 'styled-components';

export const ContainerDoneRecipes = styled.section`
  display: flex;
  width: 100%;
  height: auto;
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

export const MessageEmpty = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
