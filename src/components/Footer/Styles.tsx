import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #3f3533;
  width: 100%;
  height: 200px;
  color: darkgray;

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

  media screen and (max-width: 360px) {
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
  
    img {
      width: 35px;
    }
  }
`;
