import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: auto;
`;

export const HeaderNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  background-color: #FCDC36;
`;

export const NavbarLogo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  img {

    margin: 0 10px;
  }
`;

export const NavbarButtons = styled.div`
  button {
    border: none;
    background-color: #FCDC36;
    cursor: pointer;
  }

  img {
    margin: 0 10px;
    background-color: #FCDC36;
    width: 26px;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 50px 0 20px 0;

  h1 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 900;
    line-height: 21px;
    letter-spacing: 0.105em;
    text-align: center;
    color: #41197F;
    margin: 10px 0;
  }
`;
