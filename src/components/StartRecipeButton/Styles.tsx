import styled from 'styled-components';

export const ContainerStartButton = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StartButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: #df3626;
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  margin: 30px 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;
  }
`;
