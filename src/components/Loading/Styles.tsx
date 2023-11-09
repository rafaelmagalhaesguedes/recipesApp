import styled, { keyframes } from 'styled-components';
import iconSpinner from '../../images/login/loading.png';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.section`
  align-items: center;
  display: flex;
  gap: 10px;
  margin: 20px 40px;
  position: relative;
`;

export const IconSpinner = styled.span`
  animation: ${spin} 3s linear infinite;
  background-color: transparent;
  background-image: url(${iconSpinner});
  height: 200px;
  width: 200px;
`;

export const TextSpinner = styled.p`
  color: rgba(0, 59, 229, 1);
  font-family: Epilogue, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;
