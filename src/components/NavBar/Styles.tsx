/** *****************************************
*
*    CSS Styles Component Navbar Responsive
*
********************************************* */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarResponsive = styled.nav`
  color: white;
  
  @media only screen and ( max-width : 768px ) {
    color: white;
    display: block;
  }
`;

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
  
`;

export const Bar = styled.div`
  background-color: white;
  height: 5px;
  margin: 3px 0;
  transition: 0.4s;
  width: 25px;
`;

export const MenuToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 1000;

  &.active ${Bar}:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  &.active ${Bar}:nth-child(2) {
    opacity: 0;
  }

  &.active ${Bar}:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  &.active {
    ${Bar}:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    ${Bar}:nth-child(2) {
      opacity: 0;
    }

    ${Bar}:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;

export const NavbarLinks = styled.div`
  display: none;
  background-color: #3f3533;
  color: white;
  flex-direction: column;
  width: 40%;
  height: 100vh;
  justify-content: space-evenly;
  right: 0%;
  padding: 0 40px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
    
  &.active {
    display: flex;
  }

  @media only screen and ( max-width : 768px ) {
    width: 100%;
  }
`;

export const NavLinked = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0 10px;

  img {
    width: 30px;
  }

  @media only screen and ( max-width : 768px ) {
    font-size: 1rem;
  }
`;
