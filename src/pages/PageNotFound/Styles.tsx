import styled from 'styled-components';

export const ContainerNotFound = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #22222;
  color: dark;
  text-align: center;

  a {
    color: #111111;
    text-decoration: underline;
  }
  
  span {
    font-size: 10rem;
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    .navbar {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .navbar {
      display: none;
    }
  }
`;
