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
import useLogin from '../../hooks/useLogin';

function Login() {
  const {
    email, password, addEmail, addPassword, validateForm, handleSubmit,
  } = useLogin('');

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
            value={ email }
            onChange={ ({ target }) => addEmail(target.value) }
            placeholder="Email"
          />
          <ValidIcon />
        </InputEmail>
        <InputEmail>
          <InputsLogin
            data-testid="password-input"
            type="password"
            value={ password }
            onChange={ ({ target }) => addPassword(target.value) }
            placeholder="Password"
          />
          <InvalidIcon />
        </InputEmail>
        <LoginBtn
          data-testid="login-submit-btn"
          onClick={ handleSubmit }
          disabled={ !validateForm() }
        >
          entrar
        </LoginBtn>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
