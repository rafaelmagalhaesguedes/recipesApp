import styled from 'styled-components';

export const ContainerDoneRecipes = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0 100px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
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
