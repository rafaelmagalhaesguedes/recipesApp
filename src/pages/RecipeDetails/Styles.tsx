import styled, { keyframes } from 'styled-components';

export const ContainerRecipeDetails = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    height: auto;
  }

  @media screen and (min-width: 1367px) and (max-width: 1920px) {
    height: auto;
  }

  @media screen and (min-width: 1921px) {
    height: auto;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1173px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
`;

export const RecipeTitle = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    color: #000;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 2.1px;
    text-transform: uppercase;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 60%;
  padding: 0 20px;
  margin: 40px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;

export const Heading3 = styled.h3`
  color: #1A1B1C;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2.1px;
  margin: 10px 0;
  text-align: left;

  @media screen and (max-width: 768px) {
    color: #1A1B1C;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2.1px;
    margin-bottom: 10px;
    text-align: left;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ButtonsFavShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-top: 2px;
  }
`;

export const LinkCopiedText = styled.p`
  font-size: 16px;
  color: #4d4d4d;
  padding: 2px;
  margin-bottom: 5px;
  animation: ${fadeOut} 2s linear forwards;
`;

export const CategoryContainer = styled.div`
  display: flex;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  flex-flow: row wrap;
  padding: 5px 0;

  p {
    text-transform: uppercase;
  }
`;

export const IngredientsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  border-left: 1px solid #df3626;
  align-items: left;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 10px;

  li {
    color: #1A1B1C;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    line-through solid rgb(0, 0, 0);
    padding: 0 10px;
  }
`;

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  text-align: justify;
  line-height: 1.5;
  letter-spacing: 1px;
  font-size: 15px;
  margin-bottom: 20px;
`;
