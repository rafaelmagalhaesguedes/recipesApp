import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #3f3533;
  

  @media screen and (max-width: 360px) {
    width: 100%;
    background-color: #3f3533;
    .navbar {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background-color: #3f3533;
    .navbar {
      display: none;
    }
  }
`;

export const HeaderNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #3f3533;
  padding-left: 20px;
  height: 60px;

  @media screen and (max-width: 360px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavbarLogo = styled.div`
  padding: 10px;
  margin-top: 40px;

  .logo {
    display: block;
  }

  .logo_mobile {
    display: none;
  }

  h2 {
    color: white;
    padding: 10px;
  }

  img {
    width: 100px;
  }

  @media screen and (max-width: 360px) {
    margin: 0;
    padding: 0;

    .logo {
      display: none;
    }

    .logo_mobile {
      display: none;
    }

    img {
      width: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    
    .logo {
      display: none;
    }

    .logo_mobile {
      display: none;
    }

    img {
      width: 50px;
    }
  }
`;

export const NavbarButtons = styled.div`
  display: flex;
  flex-direction: row;
  display: none;
  
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    margin: 0 20px;
    background-color: transparent;
    width: 26px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    
    button {
      display: block;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    
    .searchIcon {
      margin: 0 20px;
      background-color: transparent;
      width: 25px;
    }

    .profileIcon {
      margin: 0 10px;
      background-color: #3f3533;
      width: 30px;
    }
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  height: 100px;

  h1 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 900;
    line-height: 21px;
    letter-spacing: 0.105em;
    text-align: center;
    color: white;
    margin: 10px 0;
  }

  img {
    width: 50px;
  }

  @media screen and (max-width: 360px) {
  }
`;
