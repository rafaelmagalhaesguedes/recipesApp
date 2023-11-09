import styled from 'styled-components';

export const ContainerSearchResult = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;

  h1 {
    margin: 20px 0;
  }
`;

export const ResultCard = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;

  img {
    width: 318px;
    border-radius: 10px;
  }

  h2 {
    word-wrap: break-word;
    width: 318px;
  }
`;
