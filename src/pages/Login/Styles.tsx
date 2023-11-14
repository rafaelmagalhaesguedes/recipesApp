import styled from 'styled-components';
import { FaUser, FaKey } from 'react-icons/fa';
import bgLogin from '../../images/login/bg_login_2.jpg';
import bgLoginMobile from '../../images/login/bg_login_mobile.jpg';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-image: url(${bgLogin});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 1260px) {
    width: 100%;
    height: 100vh;
    background-image: url(${bgLoginMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const LoginBg = styled.div`
  width: 60%;

  @media only screen and (max-width: 1260px) {
    width: 0;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 55px;
  width: 30%;
  height: 100%;
  margin-left: 25px;

  @media only screen and (max-width: 1260px) {
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin: 0;
    padding-bottom: 15px;
  }
`;

export const TitleLogin = styled.h1`
  font-size: 22px;
  font-weight: 900;
  line-height: 21px;
  letter-spacing: 0.165em;
  color: white;
  padding-bottom: 5px;
  text-transform: uppercase;
  margin: 20px 0 10px 0;

  @media only screen and (max-width: 1260px) {
    margin-bottom: 25px;
  }
`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputsLogin = styled.input`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  padding: 0 23px 0 30px;
  border: 0.5px solid #d0d0d0;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  background: white;
  color: black;

  &::placeholder {
    color: black;
  }
  
  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`;

export const ValidIcon = styled(FaUser)`
  color: green;
  width: 12px;
  position: absolute;
  margin: 16px 8px;
`;

export const InvalidIcon = styled(FaKey)`
  color: green;
  position: absolute;
  width: 12px;
  margin: 16px 8px;
`;

export const LoginBtn = styled.button`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  background: #281f0e;
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 10px 0;

  &:disabled {
    background: #3f3533;
    cursor: not-allowed;
  }
`;
