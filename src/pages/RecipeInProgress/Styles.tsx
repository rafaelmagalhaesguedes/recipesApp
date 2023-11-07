import styled from 'styled-components';

export const ContainerRecipeInProgress = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 100%;
  margin: 0;
`;

export const ContainerHeader = styled.div`
display: flex;
flex-direction: column;
width: 360px;
margin-top: 0px;
object-position: top;
margin-bottom: 150px;
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
  position: relative;
  z-index: 1;
  color: #FFF;
  text-align: center;
  font-family: Epilogue;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  margin-top: -90px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  align-items: center;
`;

export const FinishButton = styled.button`
  width: 315px;
  height: 40px;
  border-radius: 5px;
  background: #FCC436;
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ShareFavButton = styled.button`
  background-color: #ccc;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 40px;
  height: 40px;
  margin-right: 10px;

  &:hover {
    background-color: #41197F;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
margin-top: -90px;
`;

export const LinkCopiedText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #4d4d4d;
`;

export const CategoryContainer = styled.div`
  display: flex;
  color: #FCC436;
  flex-shrink: 0;
  font-family: Epilogue;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: -40px;
  margin-left: 10px;`;
