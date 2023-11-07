import styled, { keyframes } from 'styled-components';

export const ContainerRecipeDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 161px;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RecipeTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  text-align: center;
  font-family: Epilogue, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 2.1px;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100%;
  margin-top: 0px;
  margin-bottom: 10px;
  padding: 10px;

  button {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 315px;
    height: 40px;
    border-radius: 5px;
    background: #FCC436;
    border: none;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  }
`;

export const Heading3 = styled.h3`
  color: #1A1B1C;
  font-family: Epilogue, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.1px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ShareFavButton = styled.button`

`;

export const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: right;
  top: 15px;
  right: 15px;

  button {
  background: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 35px;
  height: 35px;
  margin-right: 10px;

  &:hover {
    background-color: #41197F;
  }

  img {
    width: 23px;
    height: 23px;
  }
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
  font-size: 16px;
  color: #4d4d4d;
  padding: 2px;
  margin-bottom: 5px;
  animation: ${fadeOut} 2s linear forwards;
`;

export const CategoryContainer = styled.div`
  position: absolute;
  display: flex;
  color: #FCC436;
  font-family: Epilogue;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  left: 15px;
  top: 20px;
  `;

export const IngredientsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 340px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 10px;
  align-items: left;
  margin-bottom: 10px;
  align-self: center;

  li {
    margin-left: 15px;
    margin-bottom: 5px;
    color: #1A1B1C;
    font-family: Epilogue, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  `;

export const InstructionsContainer = styled.div`
display: flex;
flex-direction: column;
width: 340px;
border: 1px solid #bdbdbd;
border-radius: 5px;
padding: 10px;
text-align: justify;
align-self: center;
margin-bottom: 10px;
`;
