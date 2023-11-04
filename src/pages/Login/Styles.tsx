import styled from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #41197F;
  height: 380px;
`;

export const LogoImg = styled.img`
  width: 198px;
  height: 158px;
  margin-top: 100px;
`;

export const ImageTomato = styled.img`
`;

export const LoginTitle = styled.h1`
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

export const LoginInput = styled.input`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  padding: 0 20px;
  border: 0.5px solid #d0d0d0;
  margin: 5px 0;
  
  &::placeholder {
    color: gray;
  }
  
  &:focus {
    outline: none;
    border: 0.5px solid #41197F;
  }
`;

export const LoginButton = styled.button`
  width: 276px;
  height: 40px;
  border-radius: 5px;
  background: #FCC436;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 10px;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
