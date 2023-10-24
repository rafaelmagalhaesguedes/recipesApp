import React from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { state, dispatch } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  return (
    <div>
      <input
        type="email"
        value={ state.email }
        onChange={ handleEmailChange }
        placeholder="Email"
        data-testid="email-input"
      />
      <input
        type="password"
        value={ state.password }
        onChange={ handlePasswordChange }
        placeholder="Password"
        data-testid="password-input"
      />
      <button
      data-testid="login-submit-btn"
      > 
        entrar
      </button>
    </div>
  );
}

export default Login;
