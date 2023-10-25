import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
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
    if (isFormValid) {
      localStorage.setItem('user', JSON.stringify({ email: state.email }));
    }
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
        onClick={ handleSubmit }
        disabled={ !isFormValid }
      >
        entrar
      </button>
    </div>
  );
}

export default Login;
