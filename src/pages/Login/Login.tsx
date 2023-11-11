import { useNavigate } from 'react-router-dom';
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
import useLoginForm from '../../hooks/useLoginForm';

function Login() {
  const navigate = useNavigate();
  const loginForm = useLoginForm('');

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email: loginForm.email }));
    resetForm();
    navigate('/meals');
  };

  const resetForm = () => {
    loginForm.setEmail('');
    loginForm.setPassword('');
  };

  return (
    <LoginContainer>
      <LoginBg />
      <LoginWrapper>
        <img src={ logo } alt="logo" width={ 200 } />
        <TitleLogin>Login</TitleLogin>
        <InputEmail>
          <InputsLogin
            data-testid="email-input"
            type="email"
            value={ loginForm.email }
            onChange={ ({ target }) => loginForm.addEmail(target.value) }
            placeholder="Email"
          />
          <ValidIcon />
        </InputEmail>
        <InputEmail>
          <InputsLogin
            data-testid="password-input"
            type="password"
            value={ loginForm.password }
            onChange={ ({ target }) => loginForm.addPassword(target.value) }
            placeholder="Password"
          />
          <InvalidIcon />
        </InputEmail>
        <LoginBtn
          data-testid="login-submit-btn"
          onClick={ handleSubmit }
          disabled={ !loginForm.validateForm() }
        >
          entrar
        </LoginBtn>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
