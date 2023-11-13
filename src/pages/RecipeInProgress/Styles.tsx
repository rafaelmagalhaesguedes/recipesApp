/* eslint-disable max-lines */
import styled, { keyframes } from 'styled-components';

export const ContainerRecipeInProgress = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  justify-content: center;

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
    height: 100vh;
  }

  @media screen and (min-width: 1921px) {
    height: 100vh;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 40px;

  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    margin-top: 0;
    padding: 20px;
    margin-bottom: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  height: auto;
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

export const FinishButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: #df3626;
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 30px 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const ShareFavButton = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 35px;
  height: 35px;

  &:hover {
    background-color: #df3626;
    margin: 0;
    padding: 0;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const ContainerButtons = styled.div`
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
export const LinkCopiedText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #000;
  animation: ${fadeOut} 3s linear forwards;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    color: #000;
    animation: ${fadeOut} 3s linear forwards;
  }
`;

export const ContainerCategory = styled.div`
  display: flex;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    color: #000;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  p {
  text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-top: 2px;
  }
`;

export const IngredientsContainer = styled.div`
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

export const IngredientsCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 10px;

  label {
    color: #1A1B1C;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    padding: 0 10px;
  }
`;

export const CheckboxIngredients = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #df3626;
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: #000;
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
`;

export const LoadingRecipes = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
