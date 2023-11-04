import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logoImg from '../../images/logo.png';
import tomatoImg from '../../images/tomato.png';
import {
  ImageTomato,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginLogo,
  LoginTitle,
  LogoImg,
} from './Styles';

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    dispatch({ type: 'SET_EMAIL', payload: email });
    validateForm(email, state.password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    dispatch({ type: 'SET_PASSWORD', payload: password });
    validateForm(state.email, password);
  };

  const validateForm = (email: string, password: string) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length > 6;
    setIsFormValid(isValidEmail && isValidPassword);
  };

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email: state.email }));
    navigate('/meals');
  };

  return (
    <LoginContainer>
      <LoginLogo>
        <LogoImg src={ logoImg } alt="Logo" />
        <ImageTomato src={ tomatoImg } alt="Tomato" />
      </LoginLogo>
      <LoginTitle>Login</LoginTitle>
      <LoginInput
        type="email"
        value={ state.email }
        onChange={ handleEmailChange }
        placeholder="Email"
        data-testid="email-input"
      />
      <LoginInput
        type="password"
        value={ state.password }
        onChange={ handlePasswordChange }
        placeholder="Password"
        data-testid="password-input"
      />
      <LoginButton
        data-testid="login-submit-btn"
        onClick={ handleSubmit }
        disabled={ !isFormValid }
      >
        entrar
      </LoginButton>
    </LoginContainer>
  );
}

export default Login;
