import styled from 'styled-components';

export const DoneRecipesCard = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  gap: 2rem;
  margin: 20px 0;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 318px;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 163px;
  flex-direction: row;
  border-radius: 5px;
  border: 0.5px solid #B1B1B1;

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
