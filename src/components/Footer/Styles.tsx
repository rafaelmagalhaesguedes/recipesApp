import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #3f3533;
  width: 100%;
  height: auto;
  color: darkgray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 50px;
  align-items: center;
  bottom: 0;

  h3 {
    padding-bottom: 10px;
    color: white;
  }

  .recipeAppTitle {
    display: none;
  }

  a {
    color: white;
  }

  img {
    width: 100px;
    padding: 10px;
  }

  .logoFooter {
    width: 60%;
  }

  .imageLogo {
    width: 200px;
  }

  .buttonsFooter {
    width: 20%;
  }

  .linksFooter {
    width: 20%;
  }

  .menuFooter {
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    bottom: 0;
    position: fixed;
    background: #3f3533;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    justify-content: space-between;
    
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

    .imageLogo {
      display: none;
    }

    .recipeAppTitle {
      display: block;
    }

    .menuFooter {
      display: none;
    }
  
    img {
      width: 60px;
    }

    h4 {
      padding: 20px 0;
      font-size: 15px;
      color: white;
    }
  }

  @media only screen and (max-width: 1920px) {
    bottom: 0;
  }
`;
