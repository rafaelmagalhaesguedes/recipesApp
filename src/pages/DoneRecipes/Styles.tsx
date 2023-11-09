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

export const DoneFilter = styled.section`
  width: 50%;
  margin: 30px 0 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  img {
    width: 66px;
    border: none;
    background-color: transparent;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    margin: 10px 0 20px 0;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  
    img {
      width: 66px;
      border: none;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px 0 20px 0;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  
    img {
      width: 66px;
      border: none;
      background-color: transparent;
    }
  }
`;

export const DoneCard = styled.div`
  width: 318px;
  height: auto;
  
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 2rem;

  @media screen and (max-width: 360px) {
    width: 318px;
    margin: 10px 0 20px 0;
  
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 163px;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid #B1B1B1;
  margin: 20px 0;

  @media screen and (max-width: 360px) {
    height: 163px;
  }
`;

export const ImageCard = styled.img`
  width: 163px;
  height: 161px;
  border-radius: 5px 0 0 5px;

  @media screen and (max-width: 360px) {
    width: 163px;
    height: 161px;
    border-radius: 5px 0 0 5px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;
`;

export const TitleInfos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #1A1B1C;
  padding-top: 10px;
`;

export const CateroryType = styled.p`
  font-size: 12px;
  color: #797D86;
`;

export const ButtonShare = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    background-color: transparent;
  }
`;

export const MessageEmpty = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
  margin: 52px;
`;
