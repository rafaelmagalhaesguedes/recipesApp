import styled from 'styled-components';

export const ContainerDoneRecipes = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 640px;
  padding: 20px;
`;

export const DoneFilter = styled.section`
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
    height: 83px;
    border: none;
    background-color: transparent;
  }
`;

export const DoneCard = styled.div`
  width: 318px;
  height: 135px;

  display: flex;
  flex-direction: column;
  border: 0.5px solid #B1B1B1;
  border-radius: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 163px;
  height: 134px;
  border-radius: 5px 0 0 5px;
`;

export const Infos = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0 20px;
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
  padding: 10px;

  img {
    background-color: transparent;
  }
`;
