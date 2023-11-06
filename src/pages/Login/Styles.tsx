import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #41197F;
  width: 360px;
  height: 380px;
`;

export const ImageLogo = styled.img`
  width: 198px;
  height: 158px;
  margin-top: 130px;
`;

export const ImageTomato = styled.img`
  width: 360px;
`;

export const TitleLogin = styled.h1`
  font-size: 18px;
  font-style: italic;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.165em;
  text-align: center;
  margin: 50px 0 10px 0;
  color: #41197F;
  text-transform: uppercase;
`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const InputsLogin = styled.input`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  padding: 0 23px 0 17px;
  border: 0.5px solid #d0d0d0;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: darkblue;

  &::placeholder {
    color: #41197F;
  }
  
  &:focus {
    outline: none;
    border: 0.5px solid #41197F;
  }
`;

export const ValidIcon = styled(FaCheck)`
  color: green;
  width: 12px;
  position: absolute;
  margin: 16px 8px;
`;

export const InvalidIcon = styled(FaCheck)`
  color: red;
  position: absolute;
  width: 12px;
  margin: 16px 8px;
`;

export const LoginButton = styled.button`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  background: #41197F;
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 10px;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
