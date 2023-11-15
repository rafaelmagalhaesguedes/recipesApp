import logo from '../../images/login/recipesApp.png';
import {
  LoginContainer,
  InputEmail,
  InputsLogin,
  ValidIcon,
  InvalidIcon,
  LoginWrapper,
  LoginBg,
  LoginBtn,
  LoginImage,
  SignUp,
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
        <LoginImage src={ logo } alt="logo" />
        <InputEmail>
          <InputsLogin
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ ({ target }) => addEmail(target.value) }
            placeholder="user@email.com"
          />
          <ValidIcon />
        </InputEmail>
        <InputEmail>
          <InputsLogin
            data-testid="password-input"
            type="password"
            value={ password }
            onChange={ ({ target }) => addPassword(target.value) }
            placeholder="password"
          />
          <InvalidIcon />
        </InputEmail>
        <LoginBtn
          data-testid="login-submit-btn"
          onClick={ handleSubmit }
          disabled={ !validateForm() }
        >
          SIGN IN
        </LoginBtn>
        <SignUp>
          <p>
            Dont have an account?
            {' '}
            <span>Sign up</span>
          </p>
        </SignUp>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
