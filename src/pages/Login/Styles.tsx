import styled from 'styled-components';
import { FaUserAlt, FaKey } from 'react-icons/fa';
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

export const LoginImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 15px;
`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputsLogin = styled.input`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  padding: 0 35px;
  border: 0.5px solid #d0d0d0;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 520;
  letter-spacing: 0.6px;
  background: white;
  color: black;

  &::placeholder {
    color: darkgray;
  }
  
  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`;

export const SignUp = styled.div`
  color: #F4F4F4;
  font-size: 14px;
  font-weight: 620;
  text-align: center;
  padding:0;
  margin: 0;

  span {
    color: #000;
    cursor: pointer;
  }
`;

export const ValidIcon = styled(FaUserAlt)`
  color: #3f3533;
  width: 15px;
  position: absolute;
  margin: 16px 10px;
`;

export const InvalidIcon = styled(FaKey)`
  color: #3f3533;
  position: absolute;
  width: 15px;
  margin: 16px 10px;
`;

export const LoginBtn = styled.button`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  background: #3f3533;
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 10px 0;
`;
