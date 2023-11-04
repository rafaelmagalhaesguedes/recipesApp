import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logoImg from '../../images/logo.png';
import tomatoImg from '../../images/tomato.png';
import {
  LoginContainer,
  Logo,
  ImageLogo,
  ImageTomato,
  TitleLogin,
  InputEmail,
  InputsLogin,
  ValidIcon,
  InvalidIcon,
  LoginButton,
} from './Styles';

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  const [isFormValid, setIsFormValid] = useState(false);
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
  const validatePassword = state.password.length > 6;

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
    state.email = '';
    state.password = '';
  };

  return (
    <LoginContainer>
      <Logo>
        <ImageLogo src={ logoImg } alt="Logo" />
        <ImageTomato src={ tomatoImg } alt="Tomato" />
      </Logo>
      <TitleLogin>Login</TitleLogin>
      <InputEmail>
        <InputsLogin
          type="email"
          value={ state.email }
          onChange={ handleEmailChange }
          placeholder="Email"
          data-testid="email-input"
        />
        {validateEmail ? (
          <ValidIcon />
        ) : (
          <InvalidIcon />
        )}
      </InputEmail>
      <InputEmail>
        <InputsLogin
          type="password"
          value={ state.password }
          onChange={ handlePasswordChange }
          placeholder="Password"
          data-testid="password-input"
        />
        {validatePassword ? (
          <ValidIcon />
        ) : (
          <InvalidIcon />
        )}
      </InputEmail>
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
