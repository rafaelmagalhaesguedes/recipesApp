import styled from 'styled-components';

export const ContainerCarouselDetails = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
  margin-top: 15px;
`;

export const CarouselTitle = styled.h2`
  color: #1A1B1C;
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  margin: 10px 0;
`;

export const CarouselContainer = styled.div`
  overflow-x: auto;
  display: flex;
  width: 100%;
`;

export const RecommendationCard = styled.div`
  width: 100%;
  margin-right: 10px;

  img {
    width: 200px
  }

  h3 {
    color: #1A1B1C;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2.1px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 150px;
    }
  }
`;
