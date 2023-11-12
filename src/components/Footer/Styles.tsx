import styled from 'styled-components';

export const FooterContainer = styled.footer`

  @media screen and (min-width: 769px) {
    background: #3f3533;
    width: 100%;
    height: 200px;
    color: darkgray;
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    padding: 10px 50px;
    align-items: center;

    h3 {
      padding-bottom: 10px;
      color: white;
    }

    a {
      color: white;
    }

    img {
      width: 100px;
      padding: 10px;
    }

    .logoFooter {
      width: 150px;
    }
  }

  media screen and (max-width: 360px) {
    bottom: 0;
    position: fixed;
    background: #3f3533;
    width: 360px;
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 25px;
    align-items: center;

    .buttonsFooter {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .linksFooter {
      display: none;
    }

    .logoFooter {
      display: none;
    }
  
    img {
      width: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    bottom: 0;
    position: fixed;
    background: #3f3533;
    width: 360px;
    height: 50px;
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 25px;
    align-items: center;

    .linksFooter {
      display: none;
    }

    .buttonsFooter {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .logoFooter {
      display: none;
    }

    img {
      width: 35px;
    }
  }
`;
