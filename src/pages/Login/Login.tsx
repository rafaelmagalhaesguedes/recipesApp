import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../images/login/recipesApp.png';
import {
  LoginContainer,
  TitleLogin,
  InputEmail,
  InputsLogin,
  ValidIcon,
  InvalidIcon,
  LoginWrapper,
  LoginBg,
  LoginBtn,
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
    state.email = '';
    state.password = '';
  };

  return (
    <LoginContainer>
      <LoginBg />
      <LoginWrapper>
        <img src={ logo } alt="logo" width={ 200 } />
        <TitleLogin>Login</TitleLogin>
        <InputEmail>
          <InputsLogin
            type="email"
            value={ state.email }
            onChange={ handleEmailChange }
            placeholder="Email"
            data-testid="email-input"
          />
          <ValidIcon />
        </InputEmail>
        <InputEmail>
          <InputsLogin
            type="password"
            value={ state.password }
            onChange={ handlePasswordChange }
            placeholder="Password"
            data-testid="password-input"
          />
          <InvalidIcon />
        </InputEmail>
        <LoginBtn
          data-testid="login-submit-btn"
          onClick={ handleSubmit }
          disabled={ !isFormValid }
        >
          entrar
        </LoginBtn>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
