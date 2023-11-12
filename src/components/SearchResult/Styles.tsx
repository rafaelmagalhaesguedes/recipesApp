import styled from 'styled-components';

export const ContainerSearchResult = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin: 50px 0 70px 0;

  .iconArrow {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 80%;
    text-align: left;
    padding: 0 50px;
  }

  .arrow {
    width: 30px;
  }

  p {
    padding: 10px;
  }

  h1 {
    margin-bottom: 20px;
    font-style: italic;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 10px 0;

    .iconArrow {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      width: 100%;
      text-align: left;
      padding: 10px;
      margin: 0;
    }
  }
`;

export const WrapperSearchResult = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const ResultCard = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;

  img {
    width: 318px;
    border-radius: 10px;
  }

  p {
    padding: 10px 0;
    word-wrap: break-word;
    width: 318px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;

    p {
      padding: 10px 0 30px 0;
    }
  }
`;

export const ResultsNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -50px;

  h1 {
    font-size: 30px;
  }
`;
